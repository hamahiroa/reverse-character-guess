
import React from 'react';
import { useGame } from '@/context/GameContext';
import { motion } from 'framer-motion';
import { Star, Sparkles, Trophy, ThumbsUp, Frown, ArrowRight, Wand, Crown } from 'lucide-react';

const ConfettiEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-8"
          style={{
            backgroundColor: ['#FF7F7F', '#7FC8F8', '#AEECCD', '#A09BE7', '#FFD700'][i % 5],
            top: `-10%`,
            left: `${Math.random() * 100}%`,
            rotate: `${Math.random() * 360}deg`,
          }}
          animate={{
            y: ['0vh', '120vh'],
            rotate: ['0deg', `${Math.random() * 360 + 180}deg`],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const ResultPage = () => {
  const { targetCharacter, possibleCharacters, resetGame, askedQuestions, answers } = useGame();
  
  // Check if the user correctly identified the character
  const isCorrect = possibleCharacters.length === 1 && possibleCharacters[0].id === targetCharacter.id;
  
  return (
    <motion.div 
      className="game-card w-full max-w-md mx-auto relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {isCorrect && <ConfettiEffect />}
      
      <motion.div 
        className={`chip ${isCorrect ? 'bg-mint/30 text-mint-foreground' : 'bg-coral/30 text-coral'} mb-4 flex items-center`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
      >
        {isCorrect ? (
          <>
            <Trophy size={16} className="mr-1" />
            正解！
          </>
        ) : (
          <>
            <Frown size={16} className="mr-1" />
            残念！
          </>
        )}
      </motion.div>
      
      <motion.h3 
        className="text-xl md:text-2xl font-medium mb-6 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        私が考えていたのは...
        <motion.span 
          className="ml-2"
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity
          }}
        >
          <Sparkles size={20} className="text-amber-400" />
        </motion.span>
      </motion.h3>
      
      <motion.div 
        className="flex flex-col items-center mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div 
          className="w-32 h-32 rounded-lg overflow-hidden mb-4 border-2 border-white shadow-lg relative bg-gradient-to-br from-lavender/30 to-skyblue/30"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity
              }}
            >
              <span className="text-6xl">{targetCharacter.emoji || '👤'}</span>
            </motion.div>
          </div>
          
          {isCorrect && (
            <motion.div 
              className="absolute top-0 right-0"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
            >
              <Crown size={24} fill="#FFD700" stroke="#FFD700" />
            </motion.div>
          )}
        </motion.div>
        
        <motion.h4 
          className="text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          {targetCharacter.name}
        </motion.h4>
        
        <motion.p 
          className="text-sm text-center text-muted-foreground mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          {targetCharacter.description}
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="mb-6 bg-muted/30 p-3 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <h5 className="text-sm font-medium mb-2">
          質問履歴:
        </h5>
        <div className="max-h-32 overflow-auto text-xs space-y-1">
          {askedQuestions.map((question, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-1 text-muted-foreground shrink-0">Q{index + 1}:</div>
              <div className="flex-1">{question}</div>
              <div className={`ml-2 ${answers[index] === 'はい' ? 'text-mint' : answers[index] === 'いいえ' ? 'text-coral' : 'text-muted-foreground'}`}>
                {answers[index]}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      {!isCorrect && possibleCharacters.length > 0 && (
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <h5 className="text-lg font-medium mb-3 flex items-center">
            可能性があったキャラクター:
            <ThumbsUp size={16} className="ml-2 text-lavender" />
          </h5>
          <div className="flex flex-wrap gap-2 justify-center">
            {possibleCharacters.map(char => (
              <motion.div 
                key={char.id} 
                className="chip bg-lavender/20 text-lavender flex items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 1 + Math.random() * 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="mr-1">{char.emoji || '👤'}</span>
                {char.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      
      <motion.button 
        onClick={resetGame}
        className="btn-primary w-full flex items-center justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Wand size={18} className="mr-2" />
        もう一度挑戦する
      </motion.button>
    </motion.div>
  );
};

export default ResultPage;
