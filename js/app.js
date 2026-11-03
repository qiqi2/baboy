/**
 * 萌萌数学乐园 - 纯前端幼儿数学启蒙应用 (单文件高内聚分层架构)
 * 支持 file:// 本地直接双击运行与 GitHub Pages 静态托管
 * 
 * 目录索引：
 * - Layer 1: 数据字典层 (DATA LAYER - 50+ 种实物词库与萌宝情境标签)
 * - Layer 2: 声音与语音引擎 (AUDIO & SPEECH LAYER - Web Audio + Web Speech)
 * - Layer 3: 核心运算与出题引擎 (ENGINE & RULES LAYER - 复数安全规则与题型机)
 * - Layer 4: 界面渲染与状态机 (VIEW & STATE MACHINE LAYER)
 * - Layer 5: 用户交互与事件流 (INTERACTION & EVENTS LAYER - 自选玩具箱与出题官共创)
 */

(function () {
  'use strict';

  /* ==========================================================================
     Layer 1: 数据字典层 (DATA LAYER)
     ========================================================================== */

  const KID_ITEMS = [
    // 水果与萌宠 (1~2岁最爱)
    { id: 'strawberry', emoji: '🍓', enSingle: 'Strawberry', enPlural: 'Strawberries', cn: '草莓', unit: '颗', category: 'fruit' },
    { id: 'apple', emoji: '🍎', enSingle: 'Apple', enPlural: 'Apples', cn: '苹果', unit: '个', category: 'fruit' },
    { id: 'banana', emoji: '🍌', enSingle: 'Banana', enPlural: 'Bananas', cn: '香蕉', unit: '根', category: 'fruit' },
    { id: 'orange', emoji: '🍊', enSingle: 'Orange', enPlural: 'Oranges', cn: '橙子', unit: '个', category: 'fruit' },
    { id: 'watermelon', emoji: '🍉', enSingle: 'Watermelon', enPlural: 'Watermelons', cn: '西瓜', unit: '块', category: 'fruit' },
    { id: 'bunny', emoji: '🐰', enSingle: 'Bunny', enPlural: 'Bunnies', cn: '小兔', unit: '只', category: 'pet' },
    { id: 'kitty', emoji: '🐱', enSingle: 'Kitty', enPlural: 'Kitties', cn: '小猫', unit: '只', category: 'pet' },
    { id: 'puppy', emoji: '🐶', enSingle: 'Puppy', enPlural: 'Puppies', cn: '小狗', unit: '只', category: 'pet' },
    { id: 'bear', emoji: '🐻', enSingle: 'Bear', enPlural: 'Bears', cn: '小熊', unit: '只', category: 'pet' },
    { id: 'duckling', emoji: '🐥', enSingle: 'Duckling', enPlural: 'Ducklings', cn: '小鸭', unit: '只', category: 'pet' },

    // 蔬菜类
    { id: 'carrot', emoji: '🥕', enSingle: 'Carrot', enPlural: 'Carrots', cn: '胡萝卜', unit: '根', category: 'vegetable' },
    { id: 'potato', emoji: '🥔', enSingle: 'Potato', enPlural: 'Potatoes', cn: '土豆', unit: '个', category: 'vegetable' },
    { id: 'tomato', emoji: '🍅', enSingle: 'Tomato', enPlural: 'Tomatoes', cn: '番茄', unit: '个', category: 'vegetable' },
    { id: 'cucumber', emoji: '🥒', enSingle: 'Cucumber', enPlural: 'Cucumbers', cn: '黄瓜', unit: '根', category: 'vegetable' },
    { id: 'pepper', emoji: '🫑', enSingle: 'Pepper', enPlural: 'Peppers', cn: '彩椒', unit: '个', category: 'vegetable' },
    { id: 'mushroom', emoji: '🍄', enSingle: 'Mushroom', enPlural: 'Mushrooms', cn: '蘑菇', unit: '个', category: 'vegetable' },

    // 交通工具与工程机械 (3~4岁力量图腾)
    { id: 'excavator', emoji: '🚜', enSingle: 'Excavator', enPlural: 'Excavators', cn: '挖掘机', unit: '辆', category: 'vehicle' },
    { id: 'firetruck', emoji: '🚒', enSingle: 'Fire truck', enPlural: 'Fire trucks', cn: '消防车', unit: '辆', category: 'vehicle' },
    { id: 'policecar', emoji: '🚓', enSingle: 'Police car', enPlural: 'Police cars', cn: '警车', unit: '辆', category: 'vehicle' },
    { id: 'car', emoji: '🚗', enSingle: 'Car', enPlural: 'Cars', cn: '小汽车', unit: '辆', category: 'vehicle' },
    { id: 'bus', emoji: '🚌', enSingle: 'Bus', enPlural: 'Buses', cn: '公交车', unit: '辆', category: 'vehicle' },
    { id: 'bike', emoji: '🚲', enSingle: 'Bike', enPlural: 'Bikes', cn: '自行车', unit: '辆', category: 'vehicle' },
    { id: 'train', emoji: '🚂', enSingle: 'Train', enPlural: 'Trains', cn: '火车', unit: '列', category: 'vehicle' },
    { id: 'plane', emoji: '✈️', enSingle: 'Plane', enPlural: 'Planes', cn: '飞机', unit: '架', category: 'vehicle' },
    { id: 'ship', emoji: '🚢', enSingle: 'Ship', enPlural: 'Ships', cn: '轮船', unit: '艘', category: 'vehicle' },

    // 野生动物类
    { id: 'elephant', emoji: '🐘', enSingle: 'Elephant', enPlural: 'Elephants', cn: '大象', unit: '头', category: 'wild' },
    { id: 'lion', emoji: '🦁', enSingle: 'Lion', enPlural: 'Lions', cn: '狮子', unit: '头', category: 'wild' },
    { id: 'panda', emoji: '🐼', enSingle: 'Panda', enPlural: 'Pandas', cn: '大熊猫', unit: '只', category: 'wild' },
    { id: 'frog', emoji: '🐸', enSingle: 'Frog', enPlural: 'Frogs', cn: '小青蛙', unit: '只', category: 'wild' },
    { id: 'bird', emoji: '🐦', enSingle: 'Bird', enPlural: 'Birds', cn: '小鸟', unit: '只', category: 'wild' },
    { id: 'turtle', emoji: '🐢', enSingle: 'Turtle', enPlural: 'Turtles', cn: '小乌龟', unit: '只', category: 'wild' },

    // 自然与生活用品
    { id: 'tree', emoji: '🌳', enSingle: 'Tree', enPlural: 'Trees', cn: '大树', unit: '棵', category: 'nature' },
    { id: 'flower', emoji: '🌸', enSingle: 'Flower', enPlural: 'Flowers', cn: '小花', unit: '朵', category: 'nature' },
    { id: 'leaf', emoji: '🍃', enSingle: 'Leaf', enPlural: 'Leaves', cn: '树叶', unit: '片', category: 'nature' },
    { id: 'star', emoji: '⭐', enSingle: 'Star', enPlural: 'Stars', cn: '星星', unit: '颗', category: 'nature' },
    { id: 'teddy', emoji: '🧸', enSingle: 'Teddy bear', enPlural: 'Teddy bears', cn: '泰迪熊', unit: '只', category: 'daily' },
    { id: 'toothbrush', emoji: '🪥', enSingle: 'Toothbrush', enPlural: 'Toothbrushes', cn: '牙刷', unit: '把', category: 'daily' },
    { id: 'sock', emoji: '🧦', enSingle: 'Sock', enPlural: 'Socks', cn: '袜子', unit: '只', category: 'daily' },
    { id: 'shoe', emoji: '👟', enSingle: 'Shoe', enPlural: 'Shoes', cn: '鞋子', unit: '只', category: 'daily' },

    // 玩具与零食
    { id: 'balloon', emoji: '🎈', enSingle: 'Balloon', enPlural: 'Balloons', cn: '气球', unit: '个', category: 'toy' },
    { id: 'cookie', emoji: '🍪', enSingle: 'Cookie', enPlural: 'Cookies', cn: '饼干', unit: '块', category: 'snack' },
    { id: 'cupcake', emoji: '🧁', enSingle: 'Cupcake', enPlural: 'Cupcakes', cn: '纸杯蛋糕', unit: '个', category: 'snack' },
    { id: 'egg', emoji: '🥚', enSingle: 'Egg', enPlural: 'Eggs', cn: '鸡蛋', unit: '个', category: 'snack' },
    { id: 'icecream', emoji: '🍦', enSingle: 'Ice cream cone', enPlural: 'Ice cream cones', cn: '冰淇淋甜筒', unit: '个', category: 'snack' },

    // 英雄与科幻能量 (5~6岁英雄图腾)
    { id: 'ultraenergy', emoji: '⚡', enSingle: 'Ultra light', enPlural: 'Ultra lights', cn: '奥特光线', unit: '束', category: 'hero' },
    { id: 'robot', emoji: '🤖', enSingle: 'Robot', enPlural: 'Robots', cn: '机甲机器人', unit: '台', category: 'hero' },
    { id: 'rocket', emoji: '🚀', enSingle: 'Rocket', enPlural: 'Rockets', cn: '太空火箭', unit: '枚', category: 'hero' }
  ];

  const TODDLER_TAGS = {
    COUNT: { id: 'count', en: 'Count', cn: '数一数' },
    ALL_GONE: { id: 'all_gone', en: 'All gone!', cn: '吃光光！' },
    MORE: { id: 'more', en: 'More!', cn: '还要更多！' },
    FIND: { id: 'find', en: 'Where is it?', cn: '在哪里？' },
    CHOOSE: { id: 'choose', en: 'This one!', cn: '选这个！' },
    ACTION: { id: 'action', en: 'Pick one!', cn: '挑一个！' }
  };

  /* ==========================================================================
     Layer 2: 声音与语音引擎 (AUDIO & SPEECH LAYER)
     ========================================================================== */

  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.speechEnVoice = null;
      this.initVoices();
    }

    initAudio() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    initVoices() {
      if ('speechSynthesis' in window) {
        const load = () => {
          const voices = window.speechSynthesis.getVoices();
          this.speechEnVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Zira') || v.name.includes('Natural') || v.name.includes('Google')))
            || voices.find(v => v.lang.startsWith('en')) || null;
        };
        load();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = load;
        }
      }
    }

    playPop() {
      this.initAudio();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(360, now);
      osc.frequency.exponentialRampToValueAtTime(760, now + 0.08);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    }

    playChew() {
      this.initAudio();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [0, 0.08, 0.16].forEach(delay => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, now + delay);
        osc.frequency.exponentialRampToValueAtTime(150, now + delay + 0.06);
        gain.gain.setValueAtTime(0.25, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.01, now + delay + 0.06);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.07);
      });
    }

    playChime() {
      this.initAudio();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.2, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.45);
      });
    }

    playBounce() {
      this.initAudio();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.14);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    }

    speakEnglish(text) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'en-US';
      utter.rate = 0.85;
      utter.pitch = 1.25;
      if (this.speechEnVoice) utter.voice = this.speechEnVoice;
      window.speechSynthesis.speak(utter);
    }

    speakChinese(text) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'zh-CN';
      utter.rate = 0.9;
      utter.pitch = 1.25;
      window.speechSynthesis.speak(utter);
    }
  }

  const audio = new SoundEngine();

  /* ==========================================================================
     Layer 3: 核心运算与出题引擎 (ENGINE & RULES LAYER)
     ========================================================================== */

  function formatBilingual(item, count) {
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

  // 获取有效道具池（若孩子在玩具箱选了专属宝物，则100%优先使用）
  function getActiveItemPool() {
    if (state.selectedToys.length > 0) {
      return state.selectedToys;
    }
    return KID_ITEMS;
  }

  function generateToddlerQuiz(total = 15) {
    const quiz = [];
    const sceneTypes = ['feed_allgone', 'basket_more', 'compare_size', 'find_animal', 'choose_two'];
    const activePool = getActiveItemPool();

    for (let i = 0; i < total; i++) {
      const type = sceneTypes[i % sceneTypes.length];
      const foodItem = randomPick(activePool.filter(it => it.category === 'fruit' || it.category === 'snack' || it.category === 'vegetable') || activePool);
      const animalItem = randomPick(KID_ITEMS.filter(it => it.category === 'pet' || it.category === 'wild'));
      const activeItem = randomPick(activePool);

      if (type === 'feed_allgone') {
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
          speakWord: foodItem.enSingle,
          options: [
            { text: `喂给 ${animalItem.emoji} ${animalItem.enSingle}`, isCorrect: true, sound: 'chew' },
            { text: `不要啦 🙈`, isCorrect: false, sound: 'bounce' }
          ]
        });
      } else if (type === 'basket_more') {
        const bInfo1 = formatBilingual(foodItem, 1);
        quiz.push({
          type: 'collect',
          tag: TODDLER_TAGS.MORE,
          item: foodItem,
          prompt: `篮子里装入 ${bInfo1.cn}，还要更多 (More!) 吗？`,
          speakWord: 'More',
          options: [
            { text: `放进去！More! 🧺`, isCorrect: true, sound: 'pop' },
            { text: `拿出来 🍃`, isCorrect: false, sound: 'bounce' }
          ]
        });
      } else if (type === 'compare_size') {
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
          speakWord: activeItem.enPlural,
          options: [
            { text: `${activeItem.emoji.repeat(leftCount)} (1)`, count: leftCount, isCorrect: false, sound: 'bounce' },
            { text: `${activeItem.emoji.repeat(rightCount)} (${rightInfo.en})`, count: rightCount, isCorrect: true, sound: 'chime' }
          ]
        });
      } else if (type === 'find_animal') {
        quiz.push({
          type: 'find',
          tag: TODDLER_TAGS.FIND,
          item: activeItem,
          prompt: `找一找，${activeItem.cn} (${activeItem.enSingle}) 在哪里呀？`,
          speakWord: activeItem.enSingle,
          options: [
            { text: `${activeItem.emoji} Here! 在这里`, isCorrect: true, sound: 'chime' },
            { text: `❓ 不是我`, isCorrect: false, sound: 'bounce' }
          ]
        });
      } else {
        const altItem = randomPick(KID_ITEMS.filter(it => it.id !== foodItem.id));
        quiz.push({
          type: 'choose',
          tag: TODDLER_TAGS.CHOOSE,
          item: foodItem,
          altItem,
          prompt: `${foodItem.cn} (${foodItem.enSingle}) 还是 ${altItem.cn}？`,
          speakWord: foodItem.enSingle,
          options: [
            { text: `${foodItem.emoji} ${foodItem.enSingle}`, isCorrect: true, sound: 'pop' },
            { text: `${altItem.emoji} ${altItem.enSingle}`, isCorrect: true, sound: 'pop' }
          ]
        });
      }
    }
    return quiz;
  }

  function generatePreschoolQuiz(total = 15) {
    const quiz = [];
    const mathTypes = ['add', 'sub', 'fill_blank', 'compare_num'];
    const activePool = getActiveItemPool();

    for (let i = 0; i < total; i++) {
      const mathType = mathTypes[i % mathTypes.length];
      const item = randomPick(activePool);

      if (mathType === 'add') {
        const a = 1 + Math.floor(Math.random() * 7);
        const b = 1 + Math.floor(Math.random() * (10 - a));
        const answer = a + b;
        const aInfo = formatBilingual(item, a);
        const bInfo = formatBilingual(item, b);
        quiz.push({
          mathType: 'add',
          item,
          a, b, op: '+', answer,
          aInfo, bInfo,
          equationStr: `${a} ＋ ${b} ＝ ？`,
          prompt: `算一算：${aInfo.cn} ＋ ${bInfo.cn} ＝ 几个？`
        });
      } else if (mathType === 'sub') {
        const a = 2 + Math.floor(Math.random() * 8);
        const b = 1 + Math.floor(Math.random() * (a - 1));
        const answer = a - b;
        const aInfo = formatBilingual(item, a);
        const bInfo = formatBilingual(item, b);
        quiz.push({
          mathType: 'sub',
          item,
          a, b, op: '-', answer,
          aInfo, bInfo,
          equationStr: `${a} － ${b} ＝ ？`,
          prompt: `算一算：${aInfo.cn} 拿走 ${bInfo.cn}，还剩几个？`
        });
      } else if (mathType === 'fill_blank') {
        const a = 1 + Math.floor(Math.random() * 5);
        const answer = 1 + Math.floor(Math.random() * 4);
        const totalNum = a + answer;
        const aInfo = formatBilingual(item, a);
        const totInfo = formatBilingual(item, totalNum);
        quiz.push({
          mathType: 'fill_blank',
          item,
          a, b: totalNum, op: '+?', answer,
          aInfo, totInfo,
          equationStr: `${a} ＋ ( ? ) ＝ ${totalNum}`,
          prompt: `补一补：${aInfo.cn} 再加几个变成 ${totInfo.cn}？`
        });
      } else {
        const a = 1 + Math.floor(Math.random() * 8);
        let b = 1 + Math.floor(Math.random() * 8);
        if (a === b) b = (b % 8) + 1;
        const answer = Math.max(a, b);
        const item2 = randomPick(KID_ITEMS.filter(it => it.id !== item.id));
        const aInfo = formatBilingual(item, a);
        const bInfo = formatBilingual(item2, b);
        quiz.push({
          mathType: 'compare_num',
          item, item2,
          a, b, op: 'vs', answer,
          aInfo, bInfo,
          equationStr: `${a} vs ${b}`,
          prompt: `比大小：${aInfo.cn} 和 ${bInfo.cn}，输入较大数：`
        });
      }
    }
    return quiz;
  }

  /* ==========================================================================
     Layer 4: 界面渲染与状态机 (VIEW & STATE MACHINE LAYER)
     ========================================================================== */

  const TOTAL_QUESTIONS = 15;
  const state = {
    mode: 'toddler',        // 'toddler' | 'preschool' | 'maker'
    screen: 'start',
    qIndex: 0,
    score: 0,
    quizList: [],
    currentQ: null,
    inputVal: '',
    history: [],
    selectedToys: [],      // 自选玩具箱
    makerPlate: []         // 出题官当前摆盘
  };

  const screens = {
    start: document.getElementById('screen-start'),
    quiz: document.getElementById('screen-quiz'),
    result: document.getElementById('screen-result'),
    review: document.getElementById('screen-review')
  };

  const elQNum = document.getElementById('q-num');
  const elQTotal = document.getElementById('q-total');
  const elProgressFill = document.getElementById('progress-fill');
  const elStarCount = document.getElementById('star-count');
  const elPromptText = document.getElementById('prompt-text');
  const elMsg = document.getElementById('msg');
  const elToddlerStage = document.getElementById('toddler-stage');
  const elToddlerScene = document.getElementById('toddler-scene');
  const elToddlerControls = document.getElementById('toddler-controls');
  const elToddlerChoices = document.getElementById('toddler-choices');
  const elPreschoolStage = document.getElementById('preschool-stage');
  const elPreschoolControls = document.getElementById('preschool-controls');
  const elMakerStage = document.getElementById('maker-stage');
  const elMakerControls = document.getElementById('maker-controls');
  const elPlateItems = document.getElementById('plate-items');
  const elPlateHint = document.getElementById('plate-hint');
  const elMakerCounter = document.getElementById('maker-counter');
  const elMakerTray = document.getElementById('maker-tray');
  const elVisual = document.getElementById('visual');
  const elEquation = document.getElementById('equation');
  const elInputDisplay = document.getElementById('input-display');
  const elReviewList = document.getElementById('review-list');
  const elToyboxModal = document.getElementById('toybox-modal');
  const elToyGrid = document.getElementById('toy-grid');
  const elToyCountBadge = document.getElementById('toy-count-badge');
  const elRevealModal = document.getElementById('reveal-modal');
  const elRevealCover = document.getElementById('reveal-cover');
  const elRevealAnswer = document.getElementById('reveal-answer');
  const elAnsItems = document.getElementById('ans-items');
  const elAnsText = document.getElementById('ans-text');

  function showScreen(name) {
    state.screen = name;
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
  }

  function startQuiz() {
    audio.initAudio();
    state.qIndex = 0;
    state.score = 0;
    state.history = [];
    state.inputVal = '';
    state.makerPlate = [];
    elStarCount.textContent = '0';
    elQTotal.textContent = TOTAL_QUESTIONS;

    if (state.mode === 'toddler') {
      state.quizList = generateToddlerQuiz(TOTAL_QUESTIONS);
      elToddlerStage.style.display = 'flex';
      elToddlerControls.style.display = 'flex';
      elPreschoolStage.style.display = 'none';
      elPreschoolControls.style.display = 'none';
      elMakerStage.style.display = 'none';
      elMakerControls.style.display = 'none';
      loadQuestion(0);
      showScreen('quiz');
    } else if (state.mode === 'preschool') {
      state.quizList = generatePreschoolQuiz(TOTAL_QUESTIONS);
      elToddlerStage.style.display = 'none';
      elToddlerControls.style.display = 'none';
      elPreschoolStage.style.display = 'flex';
      elPreschoolControls.style.display = 'block';
      elMakerStage.style.display = 'none';
      elMakerControls.style.display = 'none';
      loadQuestion(0);
      showScreen('quiz');
    } else {
      // 小小出题官模式
      elToddlerStage.style.display = 'none';
      elToddlerControls.style.display = 'none';
      elPreschoolStage.style.display = 'none';
      elPreschoolControls.style.display = 'none';
      elMakerStage.style.display = 'flex';
      elMakerControls.style.display = 'flex';
      initMakerMode();
      showScreen('quiz');
    }
  }

  function loadQuestion(index) {
    state.qIndex = index;
    state.inputVal = '';
    const q = state.quizList[index];
    state.currentQ = q;

    elQNum.textContent = index + 1;
    elProgressFill.style.width = `${(index / TOTAL_QUESTIONS) * 100}%`;
    elPromptText.textContent = q.prompt;
    elMsg.textContent = '';
    elMsg.className = 'msg';

    if (q.speakWord) {
      audio.speakEnglish(q.speakWord);
    } else {
      audio.speakChinese(q.prompt);
    }

    if (state.mode === 'toddler') {
      renderToddlerQuestion(q);
    } else if (state.mode === 'preschool') {
      renderPreschoolQuestion(q);
    }
  }

  function renderToddlerQuestion(q) {
    elToddlerScene.innerHTML = '';
    elToddlerChoices.innerHTML = '';

    if (q.type === 'feed') {
      elToddlerScene.innerHTML = `
        <div class="actor-box">
          <div class="actor-avatar">${q.actor.emoji}</div>
          <div class="actor-tag">${q.actor.cn} ${q.actor.enSingle}</div>
        </div>
        <div class="items-basket" id="food-tray">
          ${`<span class="item-unit tap-word" data-word="${q.item.enSingle}">${q.item.emoji}</span>`.repeat(q.count)}
        </div>
        <div class="sound-chip" data-word="${q.item.enSingle}">🔊 ${q.bInfo.en}</div>
      `;
    } else if (q.type === 'collect') {
      elToddlerScene.innerHTML = `
        <div class="actor-box">
          <div class="actor-avatar">🧺</div>
          <div class="actor-tag">野餐篮 Basket</div>
        </div>
        <div class="actor-box">
          <div class="actor-avatar tap-word" data-word="${q.item.enSingle}">${q.item.emoji}</div>
          <div class="sound-chip" data-word="${q.item.enSingle}">🔊 1 ${q.item.enSingle}</div>
        </div>
      `;
    } else if (q.type === 'compare') {
      elToddlerScene.innerHTML = `
        <div class="actor-box">
          <div class="actor-avatar">${q.item.emoji.repeat(q.leftCount)}</div>
          <div class="actor-tag">左边 (${q.leftCount})</div>
        </div>
        <div style="font-size:32px; color:#b5a8e3; font-weight:900;">VS</div>
        <div class="actor-box">
          <div class="actor-avatar">${q.item.emoji.repeat(q.rightCount)}</div>
          <div class="actor-tag">右边 (${q.rightCount})</div>
        </div>
        <div class="sound-chip" data-word="${q.item.enPlural}">🔊 ${q.item.enPlural}</div>
      `;
    } else if (q.type === 'find') {
      elToddlerScene.innerHTML = `
        <div class="actor-box">
          <div class="actor-avatar tap-word" data-word="${q.item.enSingle}">🌿 ${q.item.emoji} 🌿</div>
          <div class="sound-chip" data-word="${q.item.enSingle}">🔊 Where is ${q.item.enSingle}?</div>
        </div>
      `;
    } else {
      elToddlerScene.innerHTML = `
        <div class="actor-box tap-word" data-word="${q.item.enSingle}">
          <div class="actor-avatar">${q.item.emoji}</div>
          <div class="actor-tag">${q.item.cn}</div>
        </div>
        <div style="font-size:24px; color:#b5a8e3; font-weight:800;">or</div>
        <div class="actor-box tap-word" data-word="${q.altItem.enSingle}">
          <div class="actor-avatar">${q.altItem.emoji}</div>
          <div class="actor-tag">${q.altItem.cn}</div>
        </div>
      `;
    }

    elToddlerScene.querySelectorAll('[data-word]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.speakEnglish(el.dataset.word);
      });
    });

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'toddler-btn';
      btn.textContent = opt.text;
      btn.addEventListener('click', () => handleToddlerAnswer(opt));
      elToddlerChoices.appendChild(btn);
    });
  }

  function handleToddlerAnswer(opt) {
    const q = state.currentQ;
    if (opt.isCorrect) {
      state.score++;
      elStarCount.textContent = state.score;
      if (opt.sound === 'chew') {
        audio.playChew();
        audio.speakEnglish('All gone! Good job!');
      } else {
        audio.playChime();
        audio.speakEnglish('Good job!');
      }
      elMsg.textContent = '太棒了！棒棒哒 ✨';
      elMsg.className = 'msg ok';
      state.history.push({ q, success: true });
    } else {
      audio.playBounce();
      elMsg.textContent = '点点另一边试试看哦~';
      elMsg.className = 'msg bad';
      state.history.push({ q, success: false });
    }

    setTimeout(() => {
      if (state.qIndex + 1 >= TOTAL_QUESTIONS) {
        showResult();
      } else {
        loadQuestion(state.qIndex + 1);
      }
    }, 1100);
  }

  function renderPreschoolQuestion(q) {
    let visualHtml = '';
    if (q.mathType === 'add') {
      visualHtml = `
        <div class="visual-row">
          <span>${q.item.emoji.repeat(q.a)}</span>
          <span class="v-op">＋</span>
          <span>${q.item.emoji.repeat(q.b)}</span>
        </div>
        <div class="sound-chip" data-word="${q.item.enPlural}">🔊 ${q.aInfo.en} ＋ ${q.bInfo.en}</div>
      `;
    } else if (q.mathType === 'sub') {
      visualHtml = `
        <div class="visual-row">
          <span>${q.item.emoji.repeat(q.a)}</span>
          <span style="font-size:22px; color:#ff6b81; font-weight:800; margin-left:6px;">(拿走 ${q.b} 个)</span>
        </div>
        <div class="sound-chip" data-word="${q.item.enPlural}">🔊 Take away ${q.bInfo.en}</div>
      `;
    } else if (q.mathType === 'fill_blank') {
      visualHtml = `
        <div class="visual-row">
          <span>${q.item.emoji.repeat(q.a)}</span>
          <span class="v-op">＋</span>
          <span style="border-bottom:3px dashed #b5a8e3; padding:0 12px;">？</span>
          <span class="v-op">＝</span>
          <span>${q.item.emoji.repeat(q.b)}</span>
        </div>
        <div class="sound-chip" data-word="${q.item.enPlural}">🔊 Need more ${q.item.enPlural}</div>
      `;
    } else {
      visualHtml = `
        <div class="visual-row">
          <span>${q.item.emoji.repeat(q.a)} (${q.a})</span>
          <span class="v-op">vs</span>
          <span>${q.item2.emoji.repeat(q.b)} (${q.b})</span>
        </div>
        <div class="sound-chip" data-word="${q.item.enPlural}">🔊 Compare numbers</div>
      `;
    }

    elVisual.innerHTML = visualHtml;
    elEquation.textContent = q.equationStr;
    elInputDisplay.textContent = '_';

    elVisual.querySelectorAll('[data-word]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.speakEnglish(el.dataset.word);
      });
    });
  }

  function handleNumpad(key) {
    if (key === 'ok') {
      submitPreschoolAnswer();
      return;
    }
    if (key === 'del') {
      state.inputVal = state.inputVal.slice(0, -1);
      elInputDisplay.textContent = state.inputVal || '_';
      audio.playPop();
      return;
    }
    if (/^\d$/.test(key) && state.inputVal.length < 2) {
      state.inputVal += key;
      elInputDisplay.textContent = state.inputVal;
      audio.playPop();
    }
  }

  function submitPreschoolAnswer() {
    const q = state.currentQ;
    const userNum = parseInt(state.inputVal, 10);
    const isCorrect = userNum === q.answer;

    if (isCorrect) {
      state.score++;
      elStarCount.textContent = state.score;
      audio.playChime();
      audio.speakEnglish('Correct!');
      elMsg.textContent = '太棒了，完全正确！🌟';
      elMsg.className = 'msg ok';
    } else {
      audio.playBounce();
      elMsg.textContent = `是 ${q.answer} 哦，没关系继续冲！`;
      elMsg.className = 'msg bad';
    }

    state.history.push({ q, userNum, isCorrect });

    setTimeout(() => {
      if (state.qIndex + 1 >= TOTAL_QUESTIONS) {
        showResult();
      } else {
        loadQuestion(state.qIndex + 1);
      }
    }, 1100);
  }

  /* ==========================================================================
     Layer 5: 用户交互与事件流 (自选玩具箱与出题官共创)
     ========================================================================== */

  // 5.1 自选玩具箱逻辑
  function renderToybox() {
    elToyGrid.innerHTML = '';
    KID_ITEMS.forEach(it => {
      const itemEl = document.createElement('div');
      const isSelected = state.selectedToys.some(sel => sel.id === it.id);
      itemEl.className = `toy-item ${isSelected ? 'selected' : ''}`;
      itemEl.innerHTML = `
        <div class="toy-emoji">${it.emoji}</div>
        <div class="toy-name">${it.cn}</div>
      `;
      itemEl.addEventListener('click', () => {
        audio.playPop();
        const idx = state.selectedToys.findIndex(sel => sel.id === it.id);
        if (idx >= 0) {
          state.selectedToys.splice(idx, 1);
          itemEl.classList.remove('selected');
        } else {
          state.selectedToys.push(it);
          itemEl.classList.add('selected');
          audio.speakEnglish(it.enSingle);
        }
        updateToyCountBadge();
      });
      elToyGrid.appendChild(itemEl);
    });
  }

  function updateToyCountBadge() {
    if (state.selectedToys.length === 0) {
      elToyCountBadge.textContent = '全部随机';
    } else {
      elToyCountBadge.textContent = `已选 ${state.selectedToys.length} 款`;
    }
  }

  // 5.2 小小出题官逻辑
  function initMakerMode() {
    elPromptText.textContent = '摆一摆宝物，考考爸爸妈妈吧！';
    elMsg.textContent = '';
    elProgressFill.style.width = '100%';
    renderMakerTray();
    renderMakerPlate();
  }

  function renderMakerTray() {
    elMakerTray.innerHTML = '';
    const pool = getActiveItemPool();
    pool.slice(0, 12).forEach(it => {
      const btn = document.createElement('button');
      btn.className = 'tray-item';
      btn.textContent = it.emoji;
      btn.title = it.cn;
      btn.addEventListener('click', () => {
        if (state.makerPlate.length >= 10) {
          elMsg.textContent = '盘子装满啦，快考考家长吧~';
          audio.playBounce();
          return;
        }
        state.makerPlate.push(it);
        audio.playPop();
        renderMakerPlate();
        // 英文单数/复数发音
        const info = formatBilingual(it, state.makerPlate.filter(p => p.id === it.id).length);
        audio.speakEnglish(info.en);
      });
      elMakerTray.appendChild(btn);
    });
  }

  function renderMakerPlate() {
    elPlateItems.innerHTML = '';
    if (state.makerPlate.length === 0) {
      elPlateHint.style.display = 'block';
      elMakerCounter.textContent = '已摆放：0 个';
    } else {
      elPlateHint.style.display = 'none';
      state.makerPlate.forEach((it, idx) => {
        const span = document.createElement('span');
        span.className = 'plate-item';
        span.textContent = it.emoji;
        span.title = '点一下拿走';
        span.addEventListener('click', () => {
          state.makerPlate.splice(idx, 1);
          audio.playBounce();
          renderMakerPlate();
        });
        elPlateItems.appendChild(span);
      });
      const firstItem = state.makerPlate[0];
      const count = state.makerPlate.length;
      const bInfo = formatBilingual(firstItem, count);
      elMakerCounter.textContent = `已摆放：${count} 个 (${bInfo.en})`;
    }
  }

  function challengeParent() {
    if (state.makerPlate.length === 0) {
      elMsg.textContent = '先往盘子里放几个宝物吧~';
      elMsg.className = 'msg bad';
      audio.playBounce();
      return;
    }
    audio.playChime();
    const count = state.makerPlate.length;
    const firstItem = state.makerPlate[0];
    const bInfo = formatBilingual(firstItem, count);

    elAnsItems.textContent = state.makerPlate.map(it => it.emoji).join(' ');
    elAnsText.textContent = `${bInfo.full}`;

    elRevealCover.style.display = 'block';
    elRevealAnswer.style.display = 'none';
    elRevealModal.classList.add('active');
    audio.speakChinese('请爸爸妈妈闭上眼睛，猜猜有几个？');
  }

  function doReveal() {
    audio.playChime();
    elRevealCover.style.display = 'none';
    elRevealAnswer.style.display = 'block';
    const count = state.makerPlate.length;
    const firstItem = state.makerPlate[0];
    const bInfo = formatBilingual(firstItem, count);
    audio.speakEnglish(`${bInfo.en}! Congratulations!`);
  }

  // 5.3 结果展示与复习
  function showResult() {
    audio.playChime();
    const title = document.getElementById('result-title');
    const desc = document.getElementById('result-text');
    const reward = document.getElementById('reward-label');
    const stars = document.getElementById('stars-row');

    if (state.score >= 12) {
      title.textContent = '双语探索小天才！🌟';
      stars.textContent = '⭐⭐⭐';
      desc.textContent = `答对了 ${state.score} 关，双语与数感超棒！`;
      reward.textContent = '解锁「闪亮金星大奖章」🥇';
    } else {
      title.textContent = '快乐探索棒棒哒！🎈';
      stars.textContent = '⭐⭐☆';
      desc.textContent = `完成 15 关探险，收获了丰富的单词与数感！`;
      reward.textContent = '解锁「探索小勇士勋章」🥈';
    }

    showScreen('result');
  }

  function renderReview() {
    elReviewList.innerHTML = '';
    state.history.forEach((h, idx) => {
      const item = document.createElement('div');
      item.className = 'review-item';
      if (state.mode === 'toddler') {
        item.innerHTML = `
          <div>
            <div class="r-title">第 ${idx + 1} 关：${h.q.item.emoji} ${h.q.item.enSingle}</div>
            <div class="r-detail">${h.q.prompt}</div>
          </div>
          <div style="font-size:24px;">${h.success ? '💖' : '🌱'}</div>
        `;
      } else {
        item.innerHTML = `
          <div>
            <div class="r-title">${h.q.equationStr} 答案：${h.q.answer}</div>
            <div class="r-detail">${h.q.item.emoji} ${h.q.item.enPlural}（输入：${h.userNum || '未作答'}）</div>
          </div>
          <div style="font-size:24px;">${h.isCorrect ? '✅' : '🌸'}</div>
        `;
      }
      elReviewList.appendChild(item);
    });
  }

  // 5.4 模式与全局事件绑定
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.mode = btn.dataset.mode;
      audio.playPop();
    });
  });

  document.getElementById('btn-open-toybox').addEventListener('click', () => {
    audio.playPop();
    renderToybox();
    elToyboxModal.classList.add('active');
  });

  document.getElementById('btn-close-toybox').addEventListener('click', () => {
    elToyboxModal.classList.remove('active');
  });

  document.getElementById('btn-confirm-toybox').addEventListener('click', () => {
    audio.playChime();
    elToyboxModal.classList.remove('active');
  });

  document.getElementById('btn-reset-toybox').addEventListener('click', () => {
    audio.playBounce();
    state.selectedToys = [];
    renderToybox();
    updateToyCountBadge();
  });

  document.getElementById('btn-start').addEventListener('click', startQuiz);
  document.getElementById('btn-restart').addEventListener('click', startQuiz);
  document.getElementById('btn-quit').addEventListener('click', () => showScreen('start'));
  document.getElementById('btn-speak').addEventListener('click', () => {
    if (state.currentQ) {
      if (state.currentQ.speakWord) {
        audio.speakEnglish(state.currentQ.speakWord);
      } else {
        audio.speakChinese(state.currentQ.prompt);
      }
    }
  });

  document.getElementById('btn-clear-plate').addEventListener('click', () => {
    state.makerPlate = [];
    audio.playBounce();
    renderMakerPlate();
  });

  document.getElementById('btn-challenge-parent').addEventListener('click', challengeParent);
  document.getElementById('btn-do-reveal').addEventListener('click', doReveal);
  document.getElementById('btn-maker-next').addEventListener('click', () => {
    elRevealModal.classList.remove('active');
    state.makerPlate = [];
    renderMakerPlate();
  });

  document.getElementById('btn-review').addEventListener('click', () => {
    renderReview();
    showScreen('review');
  });
  document.getElementById('btn-back-result').addEventListener('click', () => showScreen('result'));

  document.getElementById('numpad').addEventListener('click', (e) => {
    const btn = e.target.closest('.key');
    if (btn) handleNumpad(btn.dataset.key);
  });

})();
