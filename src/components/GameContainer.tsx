
import React from 'react';
import { useGame } from '@/context/GameContext';
import Character from './Character';
import QuestionCard from './QuestionCard';
import ResultPage from './ResultPage';
import { motion } from 'framer-motion';
import { Sparkles, Star, Cat, Dog, Rabbit, Bird, Fish, Wand, Trophy, Brain, Laugh, Heart } from 'lucide-react';

const AnimalFriend = ({ 
  type, 
  position, 
  delay, 
  size = 40,
  rotation = 0
}) => {
  const animals = {
    cat: <Cat size={size} className="text-coral" />,
    dog: <Dog size={size} className="text-mint" />,
    rabbit: <Rabbit size={size} className="text-lavender" />,
    bird: <Bird size={size} className="text-skyblue" />,
    fish: <Fish size={size} className="text-amber-400" />,
    heart: <Heart size={size} className="text-pink-400" />,
    laugh: <Laugh size={size} className="text-green-400" />,
    brain: <Brain size={size} className="text-purple-400" />
  };

  return (
    <motion.div 
      className="absolute z-10"
      style={{ 
        top: position.top, 
        left: position.left, 
        right: position.right,
      }}
      initial={{ opacity: 0, scale: 0, rotate: rotation }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: [0, -15, 0],
        rotate: rotation
      }}
      transition={{ 
        duration: 3,
        delay: delay,
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }}
    >
      {animals[type]}
    </motion.div>
  );
};

const GameContainer = () => {
  const { stage, startGame, progress } = useGame();
  
  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress indicator - only show during gameplay */}
      {stage === 'playing' && (
        <motion.div 
          className="w-full max-w-md h-1 bg-gray-200 rounded-full mb-8 overflow-hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div 
            className="h-full bg-lavender"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}
      
      {/* Animal friends decoration - different positions based on game stage */}
      {stage === 'intro' ? (
        <>
          <AnimalFriend type="cat" position={{ top: '15%', left: '5%' }} delay={0.5} rotation={-10} />
          <AnimalFriend type="dog" position={{ top: '25%', right: '5%' }} delay={0.7} rotation={10} />
          <AnimalFriend type="rabbit" position={{ top: '70%', left: '10%' }} delay={0.9} rotation={-5} />
          <AnimalFriend type="bird" position={{ top: '20%', right: '12%' }} delay={1.1} rotation={15} />
          <AnimalFriend type="fish" position={{ top: '75%', right: '8%' }} delay={1.3} rotation={-15} />
        </>
      ) : (
        <>
          <AnimalFriend type="heart" position={{ top: '5%', left: '5%' }} delay={0.5} size={30} rotation={-10} />
          <AnimalFriend type="laugh" position={{ top: '15%', right: '5%' }} delay={0.7} size={30} rotation={10} />
          <AnimalFriend type="brain" position={{ top: '80%', left: '8%' }} delay={0.9} size={30} rotation={-5} />
          <AnimalFriend type="bird" position={{ top: '10%', right: '12%' }} delay={1.1} size={30} rotation={15} />
          <AnimalFriend type="fish" position={{ top: '85%', right: '5%' }} delay={1.3} size={30} rotation={-15} />
        </>
      )}
      
      {/* Main game content */}
      {stage === 'intro' ? (
        <motion.div 
          className="game-card max-w-md mx-auto text-center relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div 
            className="absolute -top-6 -right-6"
            animate={{ 
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity
            }}
          >
            <Sparkles size={40} className="text-amber-400" />
          </motion.div>
          
          <motion.div 
            className="mb-8"
            animate={{ 
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity
            }}
          >
            <Character />
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            心を読む魔人のキャラクター当て
          </motion.h2>
          
          <motion.p 
            className="mb-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            私はあなたの質問に答える魔人。今からあるキャラクターについて考えます。
            あなたは質問して、私が考えているキャラクターを当ててください！
          </motion.p>
          
          <motion.button 
            onClick={startGame}
            className="btn-primary w-full flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Wand size={18} className="mr-2" />
            ゲームを始める
          </motion.button>
          
          <motion.div 
            className="mt-6 text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center justify-center gap-1 mb-2">
              <Star size={12} className="text-amber-400" />
              <span>「はい」か「いいえ」で答えられる質問をしてね</span>
              <Star size={12} className="text-amber-400" />
            </div>
            <div className="flex justify-center gap-4">
              <Trophy size={14} className="text-mint" />
              <Brain size={14} className="text-lavender" />
              <Sparkles size={14} className="text-skyblue" />
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="w-full order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Character />
          </motion.div>
          
          <motion.div 
            className="w-full order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {stage === 'playing' ? <QuestionCard /> : <ResultPage />}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default GameContainer;
