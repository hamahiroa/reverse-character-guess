
import React from 'react';
import { useGame } from '@/context/GameContext';
import { motion } from 'framer-motion';
import { Star, Sparkles, Trophy, ThumbsUp, Frown } from 'lucide-react';

const ConfettiEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full animate-confetti`}
          style={{
            backgroundColor: ['#FF7F7F', '#7FC8F8', '#AEECCD', '#A09BE7', '#FFD700'][i % 5],
            top: `-5%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `scale(${Math.random() + 0.5})`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        />
      ))}
    </div>
  );
};

const ResultPage = () => {
  const { targetCharacter, possibleCharacters, resetGame } = useGame();
  
  // Check if the user correctly identified the character
  const isCorrect = possibleCharacters.length === 1 && possibleCharacters[0].id === targetCharacter.id;
  
  return (
    <div className="game-card w-full max-w-md mx-auto animate-fade-in relative">
      {isCorrect && <ConfettiEffect />}
      
      <div className={`chip ${isCorrect ? 'bg-mint/30 text-mint-foreground' : 'bg-coral/30 text-coral'} mb-4 flex items-center`}>
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
      </div>
      
      <h3 className="text-xl md:text-2xl font-medium mb-6 flex items-center">
        私が考えていたのは...
        <Sparkles size={20} className="ml-2 text-amber-400" />
      </h3>
      
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 rounded-lg overflow-hidden mb-4 border-2 border-white shadow-lg relative">
          <div className="w-full h-full bg-gradient-to-br from-lavender/30 to-skyblue/30 flex items-center justify-center">
            <span className="text-4xl">👤</span>
          </div>
          {isCorrect && (
            <div className="absolute top-0 right-0">
              <Star size={24} fill="#FFD700" stroke="#FFD700" />
            </div>
          )}
        </div>
        
        <h4 className="text-xl font-bold">{targetCharacter.name}</h4>
        <p className="text-sm text-center text-muted-foreground mt-2">
          {targetCharacter.description}
        </p>
      </div>
      
      {!isCorrect && possibleCharacters.length > 0 && (
        <div className="mb-6">
          <h5 className="text-lg font-medium mb-3 flex items-center">
            あなたの候補:
            <ThumbsUp size={16} className="ml-2 text-lavender" />
          </h5>
          <div className="flex flex-wrap gap-2 justify-center">
            {possibleCharacters.map(char => (
              <div key={char.id} className="chip bg-lavender/20 text-lavender">
                {char.name}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <button 
        onClick={resetGame}
        className="btn-primary w-full flex items-center justify-center"
      >
        <Sparkles size={18} className="mr-2" />
        もう一度遊ぶ
      </button>
    </div>
  );
};

export default ResultPage;
