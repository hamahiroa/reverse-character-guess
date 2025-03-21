
import React, { useEffect, useState } from 'react';
import { useGame } from '@/context/GameContext';
import { characterReactions } from '@/lib/gameData';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Sparkles, Star, Lightbulb, Crown, Wand, Flame, Gift, Zap } from 'lucide-react';

// ランダムな装飾要素の生成コンポーネント
const FloatingElement = ({ delay }: { delay: number }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const elements = ["✨", "🌟", "💫", "⭐", "🔮", "🌈", "🎵", "💭", "🎀"];
  const [element, setElement] = useState(elements[0]);
  
  useEffect(() => {
    setElement(elements[Math.floor(Math.random() * elements.length)]);
    setPosition({
      top: Math.random() * 100,
      left: Math.random() * 100,
    });
  }, []);
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0, 1.2, 1],
        opacity: [0, 1, 0.8],
        y: [0, -20, 0],
      }}
      transition={{ 
        duration: 5,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute text-2xl"
      style={{ 
        top: `${position.top}%`, 
        left: `${position.left}%`,
        transform: `translate(-50%, -50%) rotate(${Math.random() * 10 - 5}deg)`,
      }}
    >
      {element}
    </motion.div>
  );
};

// マジカルエフェクトコンポーネント
const MagicalEffect = ({ isActive }: { isActive: boolean }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`magic-${i}`}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9'][i % 4]
            } 0%, transparent 70%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0],
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </motion.div>
  );
};

const Character = () => {
  const { characterReaction, askedQuestions, answers, targetCharacter } = useGame();
  const reaction = characterReactions[characterReaction as keyof typeof characterReactions];
  const [showAnswer, setShowAnswer] = useState(false);
  const [showMagicEffect, setShowMagicEffect] = useState(false);
  
  useEffect(() => {
    if (characterReaction === 'thinking') {
      setShowAnswer(false);
      setShowMagicEffect(true);
      const timer = setTimeout(() => {
        setShowMagicEffect(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (answers.length > 0) {
      const timer = setTimeout(() => {
        setShowAnswer(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [characterReaction, answers.length]);

  return (
    <div className="relative flex flex-col items-center justify-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <FloatingElement key={i} delay={i * 0.6} />
      ))}
      
      <MagicalEffect isActive={showMagicEffect || characterReaction === 'excited' || characterReaction === 'correct'} />

      <motion.div 
        className="relative z-10"
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {/* キャラクターヘッド装飾 */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-28 h-20">
          <motion.div 
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            animate={{ 
              rotate: [0, 5, 0, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Star size={28} fill="#FFD700" stroke="#FFD700" className="animate-pulse-soft drop-shadow-lg" />
          </motion.div>
          
          <motion.div 
            className="absolute top-0 left-0"
            animate={{ 
              rotate: [0, 10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Crown size={18} className="text-amber-400 drop-shadow-md" />
          </motion.div>
        </div>
        
        {/* メインキャラクターボディ */}
        <motion.div 
          className="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full overflow-hidden border-4 border-white shadow-[0_0_15px_rgba(139,92,246,0.5)] mb-4"
          animate={{ 
            boxShadow: characterReaction === 'excited' || characterReaction === 'correct' ? 
              ['0 0 15px rgba(139,92,246,0.5)', '0 0 25px rgba(139,92,246,0.8)', '0 0 15px rgba(139,92,246,0.5)'] : 
              ['0 0 15px rgba(139,92,246,0.5)']
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {/* キャラクター背景グラデーション */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/90 to-indigo-600/90 opacity-90"></div>
          
          {/* 魔法ジーニー風の下半身 */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-indigo-600/0 to-indigo-600/90"
            animate={{
              height: ['33%', '40%', '33%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="absolute bottom-0 left-0 right-0">
              <div className="w-full h-16 bg-gradient-to-t from-transparent to-indigo-500/30 blur-md"></div>
            </div>
          </motion.div>
          
          {/* キャラクター顔 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-36 h-36 md:w-40 md:h-40 relative">
              {/* 目 */}
              <motion.div 
                className={cn(
                  "absolute top-1/4 left-1/4 w-16 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center overflow-hidden",
                  characterReaction === 'happy' || characterReaction === 'excited' || characterReaction === 'correct' ? "h-10" : ""
                )}
                animate={{ 
                  scaleY: characterReaction === 'thinking' ? [1, 0.7, 1] : 
                          (characterReaction === 'happy' || characterReaction === 'excited' || characterReaction === 'correct') ? 0.7 : 1
                }}
                transition={{ 
                  duration: 1,
                  repeat: characterReaction === 'thinking' ? Infinity : 0,
                  repeatType: "reverse"
                }}
              >
                <motion.div 
                  className={cn(
                    "w-10 h-10 md:w-10 md:h-10 rounded-full", 
                    characterReaction === 'thinking' ? 'bg-gray-600' : 'bg-indigo-900',
                    characterReaction === 'excited' && 'animate-pulse-soft'
                  )}
                  animate={{ 
                    scale: characterReaction === 'excited' ? [1, 1.1, 1] : 1,
                    y: characterReaction === 'happy' || characterReaction === 'excited' || characterReaction === 'correct' ? -4 : 0
                  }}
                  transition={{ 
                    duration: 0.5,
                    repeat: characterReaction === 'excited' ? Infinity : 0
                  }}
                ></motion.div>
              </motion.div>
              
              <motion.div 
                className={cn(
                  "absolute top-1/4 right-1/4 w-16 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center overflow-hidden",
                  characterReaction === 'happy' || characterReaction === 'excited' || characterReaction === 'correct' ? "h-10" : ""
                )}
                animate={{ 
                  scaleY: characterReaction === 'thinking' ? [1, 0.7, 1] : 
                          (characterReaction === 'happy' || characterReaction === 'excited' || characterReaction === 'correct') ? 0.7 : 1
                }}
                transition={{ 
                  duration: 1,
                  repeat: characterReaction === 'thinking' ? Infinity : 0,
                  repeatType: "reverse",
                  delay: 0.1
                }}
              >
                <motion.div 
                  className={cn(
                    "w-10 h-10 md:w-10 md:h-10 rounded-full", 
                    characterReaction === 'thinking' ? 'bg-gray-600' : 'bg-indigo-900',
                    characterReaction === 'excited' && 'animate-pulse-soft'
                  )}
                  animate={{ 
                    scale: characterReaction === 'excited' ? [1, 1.1, 1] : 1,
                    y: characterReaction === 'happy' || characterReaction === 'excited' || characterReaction === 'correct' ? -4 : 0
                  }}
                  transition={{ 
                    duration: 0.5,
                    repeat: characterReaction === 'excited' ? Infinity : 0,
                    delay: 0.1
                  }}
                ></motion.div>
              </motion.div>
              
              {/* 口 */}
              <motion.div 
                className={cn(
                  "absolute bottom-1/4 left-1/2 transform -translate-x-1/2",
                  characterReaction === 'happy' || characterReaction === 'excited' || characterReaction === 'correct' 
                    ? 'border-b-4 border-white rounded-b-full w-20 h-8 md:w-20 md:h-10' 
                    : characterReaction === 'thinking' 
                      ? 'w-8 h-8 bg-slate-300 rounded-full'
                      : characterReaction === 'wrong'
                        ? 'w-16 h-2 md:w-16 md:h-2 bg-white rounded-full origin-center rotate-180'
                        : 'w-16 h-1 md:w-16 md:h-2 bg-white rounded-full'
                )}
                animate={{ 
                  width: characterReaction === 'happy' ? ['5rem', '6rem', '5rem'] : 
                         characterReaction === 'excited' || characterReaction === 'correct' ? ['5rem', '6.5rem', '5rem'] : undefined,
                  height: characterReaction === 'thinking' ? ['2rem', '1rem', '2rem'] : undefined,
                }}
                transition={{ 
                  duration: 1,
                  repeat: (characterReaction === 'happy' || characterReaction === 'excited' || characterReaction === 'thinking' || characterReaction === 'correct') ? Infinity : 0,
                  repeatType: "reverse"
                }}
              ></motion.div>
            </div>
          </div>
          
          {/* キャラクターアクセサリー */}
          <motion.div 
            className="absolute top-10 right-8 transform rotate-[30deg]"
            animate={{ 
              rotate: [30, 40, 30, 20, 30],
              y: [0, -3, 0, 3, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity
            }}
          >
            <Wand size={28} className="text-amber-300 drop-shadow-lg filter brightness-125" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-12 left-8 transform rotate-[-20deg]"
            animate={{ 
              rotate: [-20, -10, -20, -30, -20],
              scale: [1, 1.1, 1, 0.9, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity
            }}
          >
            <Zap size={28} fill="#F97316" stroke="#F97316" className="drop-shadow-lg" />
          </motion.div>
          
          {/* マジックスパークル */}
          {(characterReaction === 'excited' || characterReaction === 'correct') && (
            <>
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`spark-${i}`}
                  className="absolute w-3 h-3"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: [0, (Math.random() - 0.5) * 60],
                    y: [0, (Math.random() - 0.5) * 60],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Sparkles size={16} className="text-amber-300" />
                </motion.div>
              ))}
            </>
          )}
          
          {/* 魔法の杖 */}
          <motion.div 
            className="absolute -bottom-4 right-0 transform rotate-45"
            animate={{ 
              rotate: characterReaction === 'excited' || characterReaction === 'correct' ? [45, 60, 45, 30, 45] : 45,
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          >
            <div className="w-24 h-3 bg-amber-400 rounded-full shadow-md"></div>
            <motion.div 
              className="absolute -top-4 right-0"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity
              }}
            >
              <Flame size={24} className="text-orange-500" />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* 考え中エフェクト */}
        {characterReaction === 'thinking' && (
          <motion.div 
            className="absolute inset-0 rounded-full bg-indigo-500/10"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          />
        )}
        
        {/* 回答吹き出し */}
        {showAnswer && answers.length > 0 && askedQuestions.length > 0 && (
          <motion.div 
            className="absolute -right-24 top-14 bg-white px-5 py-3 rounded-xl border-2 border-indigo-300 shadow-lg"
            initial={{ scale: 0, opacity: 0, x: -20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="text-xl font-bold text-indigo-800">
              {answers[answers.length - 1]}
            </div>
            <div className="absolute w-4 h-4 bg-white border-l-2 border-t-2 border-indigo-300 transform rotate-45 -left-2 top-1/2 -translate-y-1/2"></div>
          </motion.div>
        )}
      </motion.div>
      
      {/* キャラクターダイアログ */}
      <motion.div 
        className="relative bg-gradient-to-r from-indigo-500/80 to-purple-500/80 backdrop-blur-md border-2 border-white/30 text-white rounded-xl shadow-lg py-3 px-6 max-w-xs md:max-w-sm mt-4"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* 装飾エフェクト */}
        {characterReaction === 'thinking' && (
          <motion.div 
            className="absolute -top-10 right-4"
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          >
            <Lightbulb size={28} className="text-amber-300 drop-shadow-lg" fill="#FDE68A" />
          </motion.div>
        )}
        
        {characterReaction === 'correct' && (
          <motion.div 
            className="absolute -top-14 left-1/2 transform -translate-x-1/2"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              y: [0, -10, 0]
            }}
            transition={{ duration: 0.5 }}
          >
            <Gift size={32} className="text-pink-500" fill="#F9A8D4" />
          </motion.div>
        )}
        
        {/* ダイアログコンテンツ */}
        <div className="flex items-center gap-2">
          {characterReaction === 'thinking' ? (
            <div className="flex gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div 
                  key={`dot-${i}`}
                  className="w-3 h-3 bg-white rounded-full inline-block"
                  animate={{ 
                    scale: [1, 0.8, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ 
                    duration: 0.7,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          ) : (
            <Wand size={18} className="text-amber-200" />
          )}
          <p className="text-sm md:text-base font-medium">{reaction.dialogue}</p>
        </div>
        
        {/* 最後の質問表示 */}
        {characterReaction !== 'thinking' && askedQuestions.length > 0 && (
          <div className="mt-2 text-xs text-white/80 border-t border-white/20 pt-1">
            最後の質問: {askedQuestions[askedQuestions.length - 1]}
          </div>
        )}
        
        {/* 装飾的な光の粒子 */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div 
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-white/80"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ 
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* 背景装飾 */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div 
            key={`bg-particle-${i}`}
            className={cn(
              "absolute w-2 h-2 rounded-full opacity-70",
              i % 5 === 0 ? "bg-purple-500" : 
              i % 5 === 1 ? "bg-indigo-400" : 
              i % 5 === 2 ? "bg-pink-400" : 
              i % 5 === 3 ? "bg-blue-400" : "bg-amber-400"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Character;
