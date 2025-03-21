export const questions = [
  {
    id: 1,
    text: "あなたが考えているキャラクターは人間ですか？",
    trait: "isHuman"
  },
  {
    id: 2,
    text: "あなたが考えているキャラクターは女性ですか？",
    trait: "isFemale"
  },
  {
    id: 3,
    text: "あなたが考えているキャラクターは魔法を使えますか？",
    trait: "hasMagic"
  },
  {
    id: 4,
    text: "あなたが考えているキャラクターはアニメに登場しますか？",
    trait: "isAnime"
  },
  {
    id: 5,
    text: "あなたが考えているキャラクターは武器を持っていますか？",
    trait: "hasWeapon"
  },
  {
    id: 6,
    text: "あなたが考えているキャラクターは主人公ですか？",
    trait: "isProtagonist"
  },
  {
    id: 7,
    text: "あなたが考えているキャラクターは飛ぶことができますか？",
    trait: "canFly"
  },
  {
    id: 8,
    text: "あなたが考えているキャラクターはペットや仲間の動物がいますか？",
    trait: "hasAnimalCompanion"
  },
  {
    id: 9,
    text: "あなたが考えているキャラクターは特殊な能力を持っていますか？",
    trait: "hasSpecialPowers"
  },
  {
    id: 10,
    text: "あなたが考えているキャラクターは現代に生きていますか？",
    trait: "isModernEra"
  },
  {
    id: 11,
    text: "あなたが考えているキャラクターは動物または動物の特徴を持っていますか？",
    trait: "isAnimalLike"
  },
  {
    id: 12,
    text: "あなたが考えているキャラクターは子供に人気がありますか？",
    trait: "isPopularWithKids"
  }
];

export const characters = [
  {
    id: 1,
    name: "桜木 花道",
    image: "/sakuragi.jpg",
    description: "『SLAM DUNK』の主人公で、赤髪の高校生バスケットボール選手。",
    traits: {
      isHuman: true,
      isFemale: false,
      hasMagic: false,
      isAnime: true,
      hasWeapon: false,
      isProtagonist: true,
      canFly: false,
      hasAnimalCompanion: false,
      hasSpecialPowers: false,
      isModernEra: true
    }
  },
  {
    id: 2,
    name: "セーラームーン",
    image: "/sailormoon.jpg",
    description: "月野うさぎの変身した姿で、月のパワーを持つ美少女戦士。",
    traits: {
      isHuman: true,
      isFemale: true,
      hasMagic: true,
      isAnime: true,
      hasWeapon: true,
      isProtagonist: true,
      canFly: false,
      hasAnimalCompanion: true,
      hasSpecialPowers: true,
      isModernEra: true
    }
  },
  {
    id: 3,
    name: "孫悟空",
    image: "/goku.jpg",
    description: "『ドラゴンボール』の主人公で、サイヤ人の血を引く強力な戦士。",
    traits: {
      isHuman: false,
      isFemale: false,
      hasMagic: false,
      isAnime: true,
      hasWeapon: false,
      isProtagonist: true,
      canFly: true,
      hasAnimalCompanion: false,
      hasSpecialPowers: true,
      isModernEra: true
    }
  },
  {
    id: 4,
    name: "ピカチュウ",
    image: "/pikachu.jpg",
    description: "『ポケットモンスター』シリーズの電気タイプのポケモン。",
    traits: {
      isHuman: false,
      isFemale: false,
      hasMagic: false,
      isAnime: true,
      hasWeapon: false,
      isProtagonist: false,
      canFly: false,
      hasAnimalCompanion: false,
      hasSpecialPowers: true,
      isModernEra: true
    }
  },
  {
    id: 5,
    name: "鬼滅の刃 竈門炭治郎",
    image: "/tanjiro.jpg",
    description: "『鬼滅の刃』の主人公で、妹を人間に戻すために戦う鬼殺隊士。",
    traits: {
      isHuman: true,
      isFemale: false,
      hasMagic: false,
      isAnime: true,
      hasWeapon: true,
      isProtagonist: true,
      canFly: false,
      hasAnimalCompanion: false,
      hasSpecialPowers: true,
      isModernEra: false
    }
  },
  {
    id: 6,
    name: "ハリー・ポッター",
    image: "/harry.jpg",
    description: "J.K.ローリングの小説シリーズの主人公で、若い魔法使い。",
    traits: {
      isHuman: true,
      isFemale: false,
      hasMagic: true,
      isAnime: false,
      hasWeapon: true,
      isProtagonist: true,
      canFly: true,
      hasAnimalCompanion: true,
      hasSpecialPowers: true,
      isModernEra: true
    }
  },
  {
    id: 7,
    name: "暁美ほむら",
    image: "/homura.jpg",
    description: "『魔法少女まどか☆マギカ』の登場人物で、時間操作の能力を持つ魔法少女。",
    traits: {
      isHuman: true,
      isFemale: true,
      hasMagic: true,
      isAnime: true,
      hasWeapon: true,
      isProtagonist: false,
      canFly: false,
      hasAnimalCompanion: false,
      hasSpecialPowers: true,
      isModernEra: true
    }
  },
  {
    id: 8,
    name: "トトロ",
    image: "/totoro.jpg",
    description: "スタジオジブリの映画『となりのトトロ』に登場する森の精霊。",
    traits: {
      isHuman: false,
      isFemale: false,
      hasMagic: true,
      isAnime: true,
      hasWeapon: false,
      isProtagonist: false,
      canFly: true,
      hasAnimalCompanion: false,
      hasSpecialPowers: true,
      isModernEra: true
    }
  },
  {
    id: 9,
    name: "ちびまる子ちゃん",
    image: "/maruko.jpg",
    description: "『ちびまる子ちゃん』の主人公、小学生の女の子。",
    traits: {
      isHuman: true,
      isFemale: true,
      hasMagic: false,
      isAnime: true,
      hasWeapon: false,
      isProtagonist: true,
      canFly: false,
      hasAnimalCompanion: false,
      hasSpecialPowers: false,
      isModernEra: true,
      isAnimalLike: false,
      isPopularWithKids: true
    }
  },
  {
    id: 10,
    name: "ポケモントレーナー・サトシ",
    image: "/satoshi.jpg",
    description: "『ポケットモンスター』シリーズの主人公、ポケモンマスターを目指す少年。",
    traits: {
      isHuman: true,
      isFemale: false,
      hasMagic: false,
      isAnime: true,
      hasWeapon: false,
      isProtagonist: true,
      canFly: false,
      hasAnimalCompanion: true,
      hasSpecialPowers: false,
      isModernEra: true,
      isAnimalLike: false,
      isPopularWithKids: true
    }
  },
  {
    id: 11,
    name: "猫バス",
    image: "/nekobus.jpg",
    description: "スタジオジブリ映画『となりのトトロ』に登場する、猫の形をした大きなバス。",
    traits: {
      isHuman: false,
      isFemale: false,
      hasMagic: true,
      isAnime: true,
      hasWeapon: false,
      isProtagonist: false,
      canFly: false,
      hasAnimalCompanion: false,
      hasSpecialPowers: true,
      isModernEra: true,
      isAnimalLike: true,
      isPopularWithKids: true
    }
  },
  {
    id: 12,
    name: "ドラえもん",
    image: "/doraemon.jpg",
    description: "22世紀から来た青い猫型ロボット、のび太の友達。",
    traits: {
      isHuman: false,
      isFemale: false,
      hasMagic: false,
      isAnime: true,
      hasWeapon: false,
      isProtagonist: true,
      canFly: true,
      hasAnimalCompanion: false,
      hasSpecialPowers: true,
      isModernEra: true,
      isAnimalLike: true,
      isPopularWithKids: true
    }
  }
];

export const characterReactions = {
  neutral: {
    expression: "普通の表情で、考え中のようです。",
    dialogue: "うーん、もう少し質問してみてね..."
  },
  thinking: {
    expression: "目を閉じて深く考えています。",
    dialogue: "なるほど！私の考えているキャラクターについて質問してね！"
  },
  happy: {
    expression: "少し笑顔になっています。",
    dialogue: "いい質問だね！だんだん絞り込めてきたかも！"
  },
  excited: {
    expression: "目を輝かせて興奮しています！",
    dialogue: "あと少し！もうすぐ私が考えてるキャラクターがわかりそう！"
  },
  surprised: {
    expression: "目を大きく開いて驚いています。",
    dialogue: "えっ！？そんなことに気づくなんて、すごいね！"
  },
  correct: {
    expression: "大きな笑顔で喜んでいます！",
    dialogue: "やった！正解だよ！素晴らしい！"
  },
  incorrect: {
    expression: "少し残念そうな表情です。",
    dialogue: "惜しかったね...また挑戦してみよう！"
  }
};
