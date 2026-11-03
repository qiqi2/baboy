/**
 * 萌宝 6 大轻量双语情境与标签词库 (1~2岁)
 * 格式规范：{ emoji, en, cn, promptEn, promptCn }
 */

export const TODDLER_TAGS = {
  // 1. 点数报数 (One, Two...)
  COUNT: {
    id: 'count',
    en: 'Count',
    cn: '数一数',
    promptCn: '小手点一点，数一数有几个呀？',
    promptEn: 'Tap and count together!'
  },

  // 2. 吃光/消失 (All gone! - 减法与空容器原型)
  ALL_GONE: {
    id: 'all_gone',
    en: 'All gone!',
    cn: '吃光光！',
    promptCn: '喂小动物吃完，全部吃光光啦！',
    promptEn: 'Yummy! All gone!'
  },

  // 3. 还要更多 (More! / Again! - 加法原型)
  MORE: {
    id: 'more',
    en: 'More!',
    cn: '还要更多！',
    againEn: 'Again!',
    againCn: '再来一个！',
    promptCn: '篮子里放进去，又多了一个！',
    promptEn: 'Put it in! One more!'
  },

  // 4. 找一找 (Where is...? / Here!)
  FIND: {
    id: 'find',
    en: 'Where is it?',
    cn: '在哪里？',
    answerEn: 'Here!',
    answerCn: '在这里！',
    promptCn: '找一找，躲在哪里呢？',
    promptEn: 'Where is Bunny? Here!'
  },

  // 5. 二选一 (This one!)
  CHOOSE: {
    id: 'choose',
    en: 'This one!',
    cn: '选这个！',
    promptCn: '看一看，宝宝想要哪一个？',
    promptEn: 'Which one do you like? This one!'
  },

  // 6. 动作指令 (Give me... / Pick...)
  ACTION: {
    id: 'action',
    en: 'Pick one!',
    cn: '挑一个！',
    promptCn: '帮帮小动物，把它拿过来吧~',
    promptEn: 'Give me one! Thank you!'
  }
};
