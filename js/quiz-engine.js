/**
 * 题目生成与复数安全规则引擎
 */

import { KID_ITEMS } from './data/items.js?v=1.0.1';
import { TODDLER_TAGS } from './data/toddler-tags.js?v=1.0.1';

// ---------- 1. 复数安全格式化规则 ----------
export function formatBilingual(item, count) {
  if (count <= 1) {
    return {
      en: `${count} ${item.enSingle}`,
      cn: `${count}${item.unit}${item.cn}`,
      full: `${item.emoji} ${count} ${item.enSingle} ｜ ${count}${item.unit}${item.cn}`
    };
  }
  return {
    en: `${count} ${item.enPlural}`,
    cn: `${count}${item.unit}${item.cn}`,
    full: `${item.emoji.repeat(Math.min(count, 5))} ${count} ${item.enPlural} ｜ ${count}${item.unit}${item.cn}`
  };
}

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ---------- 2. 萌宝模式题库生成 (1~2岁，6大情境) ----------
export function generateToddlerQuiz(total = 15) {
  const quiz = [];
  const sceneTypes = ['feed_allgone', 'basket_more', 'compare_size', 'find_animal', 'choose_two'];

  for (let i = 0; i < total; i++) {
    const type = sceneTypes[i % sceneTypes.length];
    const foodItem = randomPick(KID_ITEMS.filter(it => it.category === 'fruit' || it.category === 'snack' || it.category === 'vegetable'));
    const animalItem = randomPick(KID_ITEMS.filter(it => it.category === 'pet' || it.category === 'wild'));
    const vehicleItem = randomPick(KID_ITEMS.filter(it => it.category === 'vehicle'));

    if (type === 'feed_allgone') {
      // 吃光/消失 (All gone! - 减法原型 1~2个)
      const count = 1 + Math.floor(Math.random() * 2);
      const bInfo = formatBilingual(foodItem, count);
      quiz.push({
        type: 'feed',
        tag: TODDLER_TAGS.ALL_GONE,
        item: foodItem,
        actor: animalItem,
        count,
        bInfo,
        prompt: `喂${animalItem.cn}吃 ${bInfo.cn}，全部吃光光啦！`,
        promptEn: `Feed ${animalItem.enSingle} ${bInfo.en}. All gone!`,
        speakWord: foodItem.enSingle,
        options: [
          { text: `喂给 ${animalItem.emoji} ${animalItem.enSingle}`, isCorrect: true, sound: 'chew' },
          { text: `不要啦 🙈`, isCorrect: false, sound: 'bounce' }
        ]
      });
    } else if (type === 'basket_more') {
      // 还要更多 (More! - 加法原型 1 + 1)
      const bInfo1 = formatBilingual(foodItem, 1);
      quiz.push({
        type: 'collect',
        tag: TODDLER_TAGS.MORE,
        item: foodItem,
        prompt: `篮子里装入 ${bInfo1.cn}，还要更多 (More!) 吗？`,
        promptEn: `Put in ${bInfo1.en}. More!`,
        speakWord: 'More',
        options: [
          { text: `放进去！More! 🧺`, isCorrect: true, sound: 'pop' },
          { text: `拿出来 🍃`, isCorrect: false, sound: 'bounce' }
        ]
      });
    } else if (type === 'compare_size') {
      // 瞬视比多少 (Subitizing 1 vs 3)
      const activeItem = randomPick([animalItem, vehicleItem, foodItem]);
      const leftCount = 1;
      const rightCount = 2 + Math.floor(Math.random() * 2);
      const rightInfo = formatBilingual(activeItem, rightCount);
      quiz.push({
        type: 'compare',
        tag: TODDLER_TAGS.COUNT,
        item: activeItem,
        leftCount,
        rightCount,
        prompt: `哪一边的 ${activeItem.cn} 更多呀？`,
        promptEn: `Which side has more ${activeItem.enPlural}?`,
        speakWord: activeItem.enPlural,
        options: [
          { text: `${activeItem.emoji.repeat(leftCount)} (1)`, count: leftCount, isCorrect: false, sound: 'bounce' },
          { text: `${activeItem.emoji.repeat(rightCount)} (${rightInfo.en})`, count: rightCount, isCorrect: true, sound: 'chime' }
        ]
      });
    } else if (type === 'find_animal') {
      // 找一找 (Where is...? / Here!)
      quiz.push({
        type: 'find',
        tag: TODDLER_TAGS.FIND,
        item: animalItem,
        prompt: `找一找，${animalItem.cn} (${animalItem.enSingle}) 在哪里呀？`,
        promptEn: `Where is the ${animalItem.enSingle}? Here!`,
        speakWord: animalItem.enSingle,
        options: [
          { text: `${animalItem.emoji} Here! 在这里`, isCorrect: true, sound: 'chime' },
          { text: `❓ 不是我`, isCorrect: false, sound: 'bounce' }
        ]
      });
    } else {
      // 二选一 (This one!)
      const altItem = randomPick(KID_ITEMS.filter(it => it.id !== foodItem.id));
      quiz.push({
        type: 'choose',
        tag: TODDLER_TAGS.CHOOSE,
        item: foodItem,
        altItem,
        prompt: `${foodItem.cn} (${foodItem.enSingle}) 还是 ${altItem.cn}？`,
        promptEn: `${foodItem.enSingle} or ${altItem.enSingle}? This one!`,
        speakWord: foodItem.enSingle,
        options: [
          { text: `${foodItem.emoji} ${foodItem.enSingle}`, isCorrect: true, sound: 'pop' },
          { text: `${altItem.emoji} ${altItem.enSingle}`, isCorrect: true, sound: 'pop' } // 自由探索鼓励
        ]
      });
    }
  }
  return quiz;
}

// ---------- 3. 算式进阶题库生成 (4~6岁，多元少儿实物与题型) ----------
export function generatePreschoolQuiz(total = 15) {
  const quiz = [];
  const mathTypes = ['add', 'sub', 'fill_blank', 'compare_num'];

  for (let i = 0; i < total; i++) {
    const mathType = mathTypes[i % mathTypes.length];
    // 随机选用 8 大类实物（挖掘机、火箭、奥特能量、汽车、胡萝卜、小狗等）
    const item = randomPick(KID_ITEMS);

    if (mathType === 'add') {
      // 基础加法 (a + b <= 10)
      const a = 1 + Math.floor(Math.random() * 7);
      const b = 1 + Math.floor(Math.random() * (10 - a));
      const answer = a + b;
      const aInfo = formatBilingual(item, a);
      const bInfo = formatBilingual(item, b);
      const ansInfo = formatBilingual(item, answer);
      quiz.push({
        mathType: 'add',
        item,
        a, b, op: '+', answer,
        aInfo, bInfo, ansInfo,
        equationStr: `${a} ＋ ${b} ＝ ？`,
        prompt: `算一算：${aInfo.cn} ＋ ${bInfo.cn} ＝ 几个？`,
        promptEn: `How many ${item.enPlural} in total?`
      });
    } else if (mathType === 'sub') {
      // 基础减法 (a - b >= 1)
      const a = 2 + Math.floor(Math.random() * 8);
      const b = 1 + Math.floor(Math.random() * (a - 1));
      const answer = a - b;
      const aInfo = formatBilingual(item, a);
      const bInfo = formatBilingual(item, b);
      const ansInfo = formatBilingual(item, answer);
      quiz.push({
        mathType: 'sub',
        item,
        a, b, op: '-', answer,
        aInfo, bInfo, ansInfo,
        equationStr: `${a} － ${b} ＝ ？`,
        prompt: `算一算：${aInfo.cn} 拿走 ${bInfo.cn}，还剩几个？`,
        promptEn: `Take away ${bInfo.en}, how many left?`
      });
    } else if (mathType === 'fill_blank') {
      // 补数填空 (a + ? = total)
      const a = 1 + Math.floor(Math.random() * 5);
      const answer = 1 + Math.floor(Math.random() * 4);
      const totalNum = a + answer;
      const aInfo = formatBilingual(item, a);
      const totInfo = formatBilingual(item, totalNum);
      quiz.push({
        mathType: 'fill_blank',
        item,
        a, b: totalNum, op: '+?', answer,
        aInfo, ansInfo: formatBilingual(item, answer), totInfo,
        equationStr: `${a} ＋ ( ? ) ＝ ${totalNum}`,
        prompt: `补一补：${aInfo.cn} 再加几个能变成 ${totInfo.cn}？`,
        promptEn: `${aInfo.en} plus how many equals ${totInfo.en}?`
      });
    } else {
      // 比较多少 (哪边多？)
      const a = 1 + Math.floor(Math.random() * 8);
      let b = 1 + Math.floor(Math.random() * 8);
      if (a === b) b = (b % 8) + 1;
      const answer = Math.max(a, b);
      const item2 = randomPick(KID_ITEMS.filter(it => it.id !== item.id));
      const aInfo = formatBilingual(item, a);
      const bInfo = formatBilingual(item2, b);
      quiz.push({
        mathType: 'compare_num',
        item,
        item2,
        a, b, op: 'vs', answer,
        aInfo, bInfo,
        equationStr: `${a} vs ${b}`,
        prompt: `比一比：${aInfo.cn} 和 ${bInfo.cn}，哪个数量大？输入较大的数字：`,
        promptEn: `Which number is bigger: ${a} or ${b}?`
      });
    }
  }
  return quiz;
}
