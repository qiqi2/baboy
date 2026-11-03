/**
 * 核心实物数据字典 (可无限自由扩展)
 * 字段规范：
 * - id: 唯一标识
 * - emoji: 表现图符
 * - enSingle: 英文单数
 * - enPlural: 英文复数 (严格遵守复数安全规则)
 * - cn: 中文名词
 * - unit: 中文量词
 * - category: 分类
 */

export const KID_ITEMS = [
  // 1. 水果与萌宠类 (1~2岁最爱)
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

  // 2. 蔬菜类
  { id: 'carrot', emoji: '🥕', enSingle: 'Carrot', enPlural: 'Carrots', cn: '胡萝卜', unit: '根', category: 'vegetable' },
  { id: 'potato', emoji: '🥔', enSingle: 'Potato', enPlural: 'Potatoes', cn: '土豆', unit: '个', category: 'vegetable' },
  { id: 'tomato', emoji: '🍅', enSingle: 'Tomato', enPlural: 'Tomatoes', cn: '番茄', unit: '个', category: 'vegetable' },
  { id: 'cucumber', emoji: '🥒', enSingle: 'Cucumber', enPlural: 'Cucumbers', cn: '黄瓜', unit: '根', category: 'vegetable' },
  { id: 'pepper', emoji: '🫑', enSingle: 'Pepper', enPlural: 'Peppers', cn: '彩椒', unit: '个', category: 'vegetable' },
  { id: 'mushroom', emoji: '🍄', enSingle: 'Mushroom', enPlural: 'Mushrooms', cn: '蘑菇', unit: '个', category: 'vegetable' },

  // 3. 交通工具与工程机械 (3~4岁力量动力狂热)
  { id: 'excavator', emoji: '🚜', enSingle: 'Excavator', enPlural: 'Excavators', cn: '挖掘机', unit: '辆', category: 'vehicle' },
  { id: 'firetruck', emoji: '🚒', enSingle: 'Fire truck', enPlural: 'Fire trucks', cn: '消防车', unit: '辆', category: 'vehicle' },
  { id: 'policecar', emoji: '🚓', enSingle: 'Police car', enPlural: 'Police cars', cn: '警车', unit: '辆', category: 'vehicle' },
  { id: 'car', emoji: '🚗', enSingle: 'Car', enPlural: 'Cars', cn: '小汽车', unit: '辆', category: 'vehicle' },
  { id: 'bus', emoji: '🚌', enSingle: 'Bus', enPlural: 'Buses', cn: '公交车', unit: '辆', category: 'vehicle' },
  { id: 'bike', emoji: '🚲', enSingle: 'Bike', enPlural: 'Bikes', cn: '自行车', unit: '辆', category: 'vehicle' },
  { id: 'train', emoji: '🚂', enSingle: 'Train', enPlural: 'Trains', cn: '火车', unit: '列', category: 'vehicle' },
  { id: 'plane', emoji: '✈️', enSingle: 'Plane', enPlural: 'Planes', cn: '飞机', unit: '架', category: 'vehicle' },
  { id: 'ship', emoji: '🚢', enSingle: 'Ship', enPlural: 'Ships', cn: '轮船', unit: '艘', category: 'vehicle' },

  // 4. 野生动物类
  { id: 'elephant', emoji: '🐘', enSingle: 'Elephant', enPlural: 'Elephants', cn: '大象', unit: '头', category: 'wild' },
  { id: 'lion', emoji: '🦁', enSingle: 'Lion', enPlural: 'Lions', cn: '狮子', unit: '头', category: 'wild' },
  { id: 'panda', emoji: '🐼', enSingle: 'Panda', enPlural: 'Pandas', cn: '大熊猫', unit: '只', category: 'wild' },
  { id: 'frog', emoji: '🐸', enSingle: 'Frog', enPlural: 'Frogs', cn: '小青蛙', unit: '只', category: 'wild' },
  { id: 'bird', emoji: '🐦', enSingle: 'Bird', enPlural: 'Birds', cn: '小鸟', unit: '只', category: 'wild' },
  { id: 'turtle', emoji: '🐢', enSingle: 'Turtle', enPlural: 'Turtles', cn: '小乌龟', unit: '只', category: 'wild' },

  // 5. 自然类
  { id: 'tree', emoji: '🌳', enSingle: 'Tree', enPlural: 'Trees', cn: '大树', unit: '棵', category: 'nature' },
  { id: 'flower', emoji: '🌸', enSingle: 'Flower', enPlural: 'Flowers', cn: '小花', unit: '朵', category: 'nature' },
  { id: 'leaf', emoji: '🍃', enSingle: 'Leaf', enPlural: 'Leaves', cn: '树叶', unit: '片', category: 'nature' }, // 不规则复数
  { id: 'cloud', emoji: '☁️', enSingle: 'Cloud', enPlural: 'Clouds', cn: '白云', unit: '朵', category: 'nature' },
  { id: 'star', emoji: '⭐', enSingle: 'Star', enPlural: 'Stars', cn: '星星', unit: '颗', category: 'nature' },
  { id: 'rainbow', emoji: '🌈', enSingle: 'Rainbow', enPlural: 'Rainbows', cn: '彩虹', unit: '道', category: 'nature' },

  // 6. 日常用品类
  { id: 'teddy', emoji: '🧸', enSingle: 'Teddy bear', enPlural: 'Teddy bears', cn: '泰迪熊', unit: '只', category: 'daily' },
  { id: 'toothbrush', emoji: '🪥', enSingle: 'Toothbrush', enPlural: 'Toothbrushes', cn: '牙刷', unit: '把', category: 'daily' }, // -es 结尾
  { id: 'sock', emoji: '🧦', enSingle: 'Sock', enPlural: 'Socks', cn: '袜子', unit: '只', category: 'daily' },
  { id: 'shoe', emoji: '👟', enSingle: 'Shoe', enPlural: 'Shoes', cn: '鞋子', unit: '只', category: 'daily' },
  { id: 'backpack', emoji: '🎒', enSingle: 'Backpack', enPlural: 'Backpacks', cn: '书包', unit: '个', category: 'daily' },
  { id: 'pencil', emoji: '✏️', enSingle: 'Pencil', enPlural: 'Pencils', cn: '铅笔', unit: '支', category: 'daily' },

  // 7. 玩具乐器类
  { id: 'balloon', emoji: '🎈', enSingle: 'Balloon', enPlural: 'Balloons', cn: '气球', unit: '个', category: 'toy' },
  { id: 'yoyo', emoji: '🪀', enSingle: 'Yo-yo', enPlural: 'Yo-yos', cn: '溜溜球', unit: '个', category: 'toy' },
  { id: 'guitar', emoji: '🎸', enSingle: 'Guitar', enPlural: 'Guitars', cn: '吉他', unit: '把', category: 'toy' },
  { id: 'drum', emoji: '🥁', enSingle: 'Drum', enPlural: 'Drums', cn: '面鼓', unit: '面', category: 'toy' },
  { id: 'puzzle', emoji: '🧩', enSingle: 'Puzzle', enPlural: 'Puzzles', cn: '拼图', unit: '块', category: 'toy' },

  // 8. 零食类
  { id: 'cookie', emoji: '🍪', enSingle: 'Cookie', enPlural: 'Cookies', cn: '饼干', unit: '块', category: 'snack' },
  { id: 'cupcake', emoji: '🧁', enSingle: 'Cupcake', enPlural: 'Cupcakes', cn: '纸杯蛋糕', unit: '个', category: 'snack' },
  { id: 'egg', emoji: '🥚', enSingle: 'Egg', enPlural: 'Eggs', cn: '鸡蛋', unit: '个', category: 'snack' },
  { id: 'pizza', emoji: '🍕', enSingle: 'Pizza', enPlural: 'Pizzas', cn: '披萨', unit: '块', category: 'snack' },
  { id: 'burger', emoji: '🍔', enSingle: 'Burger', enPlural: 'Burgers', cn: '汉堡', unit: '个', category: 'snack' },
  { id: 'icecream', emoji: '🍦', enSingle: 'Ice cream cone', enPlural: 'Ice cream cones', cn: '冰淇淋甜筒', unit: '个', category: 'snack' },

  // 9. 英雄与未来图腾 (5~6岁奥特与科幻狂热)
  { id: 'ultraenergy', emoji: '⚡', enSingle: 'Ultra light', enPlural: 'Ultra lights', cn: '奥特光线', unit: '束', category: 'hero' },
  { id: 'robot', emoji: '🤖', enSingle: 'Robot', enPlural: 'Robots', cn: '机甲机器人', unit: '台', category: 'hero' },
  { id: 'rocket', emoji: '🚀', enSingle: 'Rocket', enPlural: 'Rockets', cn: '太空火箭', unit: '枚', category: 'hero' }
];
