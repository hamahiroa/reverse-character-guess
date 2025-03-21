
import React, { useEffect, useState } from 'react';
import { useGame } from '@/context/GameContext';
import { characterReactions } from '@/lib/gameData';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Sparkles, Star, Lightbulb, Crown, Magic, Wand } from 'lucide-react';

// Floating animals that appear randomly
const FloatingFriend = ({ delay }: { delay: number }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const animals = ["🐱", "🐶", "🐰", "🐦", "🦊", "🐻", "🦁", "🐯", "🐼"];
  const [animal, setAnimal] = useState(animals[0]);
  
  useEffect(() => {
    setAnimal(animals[Math.floor(Math.random() * animals.length)]);
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
      {animal}
    </motion.div>
  );
};

const Character = () => {
  const { characterReaction, askedQuestions, answers } = useGame();
  const reaction = characterReactions[characterReaction as keyof typeof characterReactions];
  const [showAnswer, setShowAnswer] = useState(false);
  
  useEffect(() => {
    if (characterReaction === 'thinking') {
      setShowAnswer(false);
    } else if (answers.length > 0) {
      const timer = setTimeout(() => {
        setShowAnswer(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [characterReaction, answers.length]);

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Add floating friends in background */}
      {Array.from({ length: 5 }).map((_, i) => (
        <FloatingFriend key={i} delay={i * 0.8} />
      ))}
      
      {/* Character container with animation */}
      <motion.div 
        className="relative"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {/* Magic hat */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-20 bg-slate-800 rounded-t-full z-10">
          <motion.div 
            className="absolute -top-6 left-1/2 transform -translate-x-1/2"
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
            <Star size={24} fill="#FFD700" stroke="#FFD700" className="animate-pulse-soft" />
          </motion.div>
          
          <motion.div 
            className="absolute top-6 left-8"
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
            <Crown size={16} className="text-amber-400" />
          </motion.div>
        </div>
        
        {/* Character body */}
        <motion.div 
          className="relative w-44 h-44 md:w-60 md:h-60 bg-gradient-to-br from-lavender to-purple-400 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4"
          animate={{ 
            boxShadow: characterReaction === 'excited' ? 
              ['0 0 0 rgba(160, 155, 231, 0.4)', '0 0 20px rgba(160, 155, 231, 0.8)', '0 0 0 rgba(160, 155, 231, 0.4)'] : 
              ['0 0 10px rgba(160, 155, 231, 0.2)']
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-lavender to-skyblue opacity-90"></div>
          
          {/* Face */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              {/* Eyes */}
              <motion.div 
                className="absolute top-1/4 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center"
                animate={{ 
                  scaleY: characterReaction === 'thinking' ? [1, 0.8, 1] : 1
                }}
                transition={{ 
                  duration: 1,
                  repeat: characterReaction === 'thinking' ? Infinity : 0,
                  repeatType: "reverse"
                }}
              >
                <motion.div 
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full", 
                    characterReaction === 'thinking' ? 'bg-slate-500' : 'bg-slate-800',
                    characterReaction === 'excited' && 'animate-pulse-soft'
                  )}
                  animate={{ 
                    scale: characterReaction === 'excited' ? [1, 1.1, 1] : 1
                  }}
                  transition={{ 
                    duration: 0.5,
                    repeat: characterReaction === 'excited' ? Infinity : 0
                  }}
                ></motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/4 right-1/4 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center"
                animate={{ 
                  scaleY: characterReaction === 'thinking' ? [1, 0.8, 1] : 1
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
                    "w-8 h-8 md:w-10 md:h-10 rounded-full", 
                    characterReaction === 'thinking' ? 'bg-slate-500' : 'bg-slate-800',
                    characterReaction === 'excited' && 'animate-pulse-soft'
                  )}
                  animate={{ 
                    scale: characterReaction === 'excited' ? [1, 1.1, 1] : 1
                  }}
                  transition={{ 
                    duration: 0.5,
                    repeat: characterReaction === 'excited' ? Infinity : 0,
                    delay: 0.1
                  }}
                ></motion.div>
              </motion.div>
              
              {/* Mouth changes based on reaction */}
              <motion.div 
                className={cn(
                  "absolute bottom-1/4 left-1/2 transform -translate-x-1/2",
                  characterReaction === 'happy' || characterReaction === 'excited' || characterReaction === 'correct' 
                    ? 'border-b-4 border-slate-800 rounded-b-full w-16 h-8 md:w-20 md:h-10' 
                    : characterReaction === 'thinking' 
                      ? 'w-8 h-8 bg-slate-400 rounded-full'
                      : 'w-12 h-1 md:w-16 md:h-2 bg-slate-800 rounded-full'
                )}
                animate={{ 
                  width: characterReaction === 'happy' || characterReaction === 'excited' ? ['4rem', '5rem', '4rem'] : undefined,
                  height: characterReaction === 'thinking' ? ['2rem', '1rem', '2rem'] : undefined
                }}
                transition={{ 
                  duration: 1,
                  repeat: (characterReaction === 'happy' || characterReaction === 'excited' || characterReaction === 'thinking') ? Infinity : 0,
                  repeatType: "reverse"
                }}
              ></motion.div>
            </div>
          </div>
          
          {/* Magic wand */}
          <motion.div 
            className="absolute -bottom-2 right-4 transform rotate-45"
            animate={{ 
              rotate: characterReaction === 'excited' ? [45, 60, 45, 30, 45] : 45
            }}
            transition={{ 
              duration: 2,
              repeat: characterReaction === 'excited' ? Infinity : 0
            }}
          >
            <div className="w-20 h-2 bg-slate-800 rounded-full"></div>
            <motion.div 
              className="absolute -top-2 right-0"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity
              }}
            >
              <Sparkles size={20} className="text-amber-400" />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Magic aura when thinking */}
        {characterReaction === 'thinking' && (
          <motion.div 
            className="absolute inset-0 rounded-full bg-lavender/10"
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
        
        {/* Answer bubble */}
        {showAnswer && answers.length > 0 && askedQuestions.length > 0 && (
          <motion.div 
            className="absolute -right-20 top-10 bg-white px-4 py-2 rounded-xl border border-lavender shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="text-lg font-bold">
              {answers[answers.length - 1]}
            </div>
            <div className="absolute w-4 h-4 bg-white border-l border-t border-lavender transform rotate-45 -left-2 top-1/2 -translate-y-1/2"></div>
          </motion.div>
        )}
      </motion.div>
      
      {/* Dialogue bubble */}
      <motion.div 
        className="glass-panel py-3 px-6 max-w-xs md:max-w-sm relative mt-2"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Thought bubble */}
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
            <Lightbulb size={24} className="text-amber-400" />
          </motion.div>
        )}
        
        <div className="flex items-center gap-2">
          {characterReaction === 'thinking' ? (
            <motion.div 
              className="w-4 h-4 bg-lavender rounded-full inline-block"
              animate={{ 
                scale: [1, 0.8, 1, 0.8, 1],
                opacity: [1, 0.7, 1, 0.7, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity
              }}
            />
          ) : (
            <Magic size={18} className="text-lavender" />
          )}
          <p className="text-sm md:text-base">{reaction.dialogue}</p>
        </div>
        
        {characterReaction !== 'thinking' && askedQuestions.length > 0 && (
          <div className="mt-2 text-xs text-muted-foreground">
            最後の質問: {askedQuestions[askedQuestions.length - 1]}
          </div>
        )}
      </motion.div>
      
      {/* Magic particles effect */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div 
            key={i}
            className={cn(
              "absolute w-2 h-2 rounded-full opacity-70",
              i % 5 === 0 ? "bg-lavender" : 
              i % 5 === 1 ? "bg-mint" : 
              i % 5 === 2 ? "bg-coral" : 
              i % 5 === 3 ? "bg-skyblue" : "bg-amber-400"
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
