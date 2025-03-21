export const characters = [
  {
    id: 1,
    name: "織田信長",
    description: "戦国時代の武将。革新的な政策と強力な軍事力で知られる。",
    traits: {
      female: false,
      young: false,
      famous: true,
      fictional: false,
      anime: false,
      historical: true,
      japanese: true,
      hero: false,
      magical: false,
    },
  },
  {
    id: 2,
    name: "卑弥呼",
    description: "3世紀頃の日本の女王。邪馬台国の支配者として知られる。",
    traits: {
      female: true,
      young: false,
      famous: true,
      fictional: false,
      anime: false,
      historical: true,
      japanese: true,
      hero: false,
      magical: true,
    },
  },
  {
    id: 3,
    name: "坂本龍馬",
    description: "幕末の志士。薩長同盟の成立に尽力し、日本の近代化に貢献。",
    traits: {
      female: false,
      young: false,
      famous: true,
      fictional: false,
      anime: false,
      historical: true,
      japanese: true,
      hero: true,
      magical: false,
    },
  },
  {
    id: 4,
    name: "紫式部",
    description: "平安時代の女流作家。『源氏物語』の作者として知られる。",
    traits: {
      female: true,
      young: false,
      famous: true,
      fictional: false,
      anime: false,
      historical: true,
      japanese: true,
      hero: false,
      magical: false,
    },
  },
  {
    id: 5,
    name: "徳川家康",
    description: "江戸幕府の初代将軍。260年以上にわたる平和な時代を築いた。",
    traits: {
      female: false,
      young: false,
      famous: true,
      fictional: false,
      anime: false,
      historical: true,
      japanese: true,
      hero: false,
      magical: false,
    },
  },
  {
    id: 6,
    name: "孫悟空",
    description: "中国の小説『西遊記』の主人公。強力な力と機知に富む。",
    traits: {
      female: false,
      young: false,
      famous: true,
      fictional: true,
      anime: true,
      historical: false,
      japanese: false,
      hero: true,
      magical: true,
    },
  },
  {
    id: 7,
    name: "ドラえもん",
    description: "未来から来た猫型ロボット。のび太を助けるために様々な道具を使う。",
    traits: {
      female: false,
      young: false,
      famous: true,
      fictional: true,
      anime: true,
      historical: false,
      japanese: true,
      hero: true,
      magical: true,
    },
  },
  {
    id: 8,
    name: "美少女戦士セーラームーン",
    description: "月を守護星に持つセーラー戦士。愛と正義のために戦う。",
    traits: {
      female: true,
      young: true,
      famous: true,
      fictional: true,
      anime: true,
      historical: false,
      japanese: true,
      hero: true,
      magical: true,
    },
  },
  {
    id: 9,
    name: "ハリー・ポッター",
    description: "魔法使いの少年。ヴォルデモート卿との戦いに挑む。",
    traits: {
      female: false,
      young: true,
      famous: true,
      fictional: true,
      anime: false,
      historical: false,
      japanese: false,
      hero: true,
      magical: true,
    },
  },
  {
    id: 10,
    name: "シャーロック・ホームズ",
    description: "19世紀末のイギリスの探偵。卓越した推理力で難事件を解決。",
    traits: {
      female: false,
      young: false,
      famous: true,
      fictional: true,
      anime: false,
      historical: false,
      japanese: false,
      hero: true,
      magical: false,
    },
  },
  {
    id: 11,
    name: "初音ミク",
    description: "クリプトン・フューチャー・メディアが開発したバーチャル・シンガー。",
    traits: {
      female: true,
      young: true,
      famous: true,
      fictional: true,
      anime: true,
      historical: false,
      japanese: true,
      hero: false,
      magical: false,
    },
  },
  {
    id: 12,
    name: "アンパンマン",
    description: "顔がパンでできたヒーロー。困っている人を助ける。",
    traits: {
      female: false,
      young: true,
      famous: true,
      fictional: true,
      anime: true,
      historical: false,
      japanese: true,
      hero: true,
      magical: true,
    },
  },
  {
    id: 13,
    name: "ゴジラ",
    description: "日本の特撮映画に登場する架空の怪獣。",
    traits: {
      female: false,
      young: false,
      famous: true,
      fictional: true,
      anime: false,
      historical: false,
      japanese: true,
      hero: false,
      magical: true,
    },
  },
  {
    id: 14,
    name: "源義経",
    description: "平安時代末期の武将。源頼朝の弟であり、数々の戦いで活躍。",
    traits: {
      female: false,
      young: true,
      famous: true,
      fictional: false,
      anime: false,
      historical: true,
      japanese: true,
      hero: true,
      magical: false,
    },
  },
  {
    id: 15,
    name: "安倍晴明",
    description: "平安時代の陰陽師。神秘的な力で多くの伝説を残す。",
    traits: {
      female: false,
      young: false,
      famous: true,
      fictional: false,
      anime: true,
      historical: true,
      japanese: true,
      hero: false,
      magical: true,
    },
  },
];

export const questions = [
  { text: "このキャラクターは女性ですか？", trait: "female" },
  { text: "このキャラクターは若いですか？", trait: "young" },
  { text: "このキャラクターは有名ですか？", trait: "famous" },
  { text: "このキャラクターは架空の人物ですか？", trait: "fictional" },
  { text: "このキャラクターはアニメに登場しますか？", trait: "anime" },
  { text: "このキャラクターは歴史上の人物ですか？", trait: "historical" },
  { text: "このキャラクターは日本人ですか？", trait: "japanese" },
  { text: "このキャラクターはヒーローですか？", trait: "hero" },
  { text: "このキャラクターは魔法を使いますか？", trait: "magical" },
];

export const characterReactions = {
  neutral: {
    dialogue: "さあ、質問してみて！ああ、「はい」か「いいえ」で答えられる質問ね。"
  },
  thinking: {
    dialogue: "うーん、考え中..."
  },
  happy: {
    dialogue: "おお！いい質問だね！だんだん絞り込まれてきたよ！"
  },
  excited: {
    dialogue: "素晴らしい！もう少しで答えが分かりそうだよ！"
  },
  correct: {
    dialogue: "おめでとう！正解だよ！"
  },
  wrong: {
    dialogue: "残念！違うよ。もう一度挑戦してみる？"
  }
};

// Add some character emojis if they don't exist
characters.forEach(char => {
  if (!char.emoji) {
    // Assign default emoji based on traits
    if (char.traits.female) {
      char.emoji = char.traits.young ? '👧' : '👩';
    } else {
      char.emoji = char.traits.young ? '👦' : '👨';
    }
    
    // Special cases
    if (char.traits.fictional && char.traits.hero) {
      char.emoji = '🦸';
    } else if (char.traits.fictional && !char.traits.hero) {
      char.emoji = '🧙';
    } else if (char.traits.historical) {
      char.emoji = '👑';
    }
  }
});
