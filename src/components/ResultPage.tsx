
import React from 'react';
import { useGame } from '@/context/GameContext';
import { motion } from 'framer-motion';

const ResultPage = () => {
  const { targetCharacter, possibleCharacters, resetGame } = useGame();
  
  // Check if the user correctly identified the character
  const isCorrect = possibleCharacters.length === 1 && possibleCharacters[0].id === targetCharacter.id;
  
  return (
    <div className="game-card w-full max-w-md mx-auto animate-fade-in">
      <div className={`chip ${isCorrect ? 'bg-mint/30 text-mint-foreground' : 'bg-coral/30 text-coral'} mb-4`}>
        {isCorrect ? '正解！' : '残念！'}
      </div>
      
      <h3 className="text-xl md:text-2xl font-medium mb-6">
        私が考えていたのは...
      </h3>
      
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 rounded-lg overflow-hidden mb-4 border-2 border-white shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-lavender/30 to-skyblue/30 flex items-center justify-center">
            <span className="text-4xl">👤</span>
          </div>
        </div>
        
        <h4 className="text-xl font-bold">{targetCharacter.name}</h4>
        <p className="text-sm text-center text-muted-foreground mt-2">
          {targetCharacter.description}
        </p>
      </div>
      
      {!isCorrect && possibleCharacters.length > 0 && (
        <div className="mb-6">
          <h5 className="text-lg font-medium mb-3">あなたの候補:</h5>
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
        className="btn-primary w-full"
      >
        もう一度遊ぶ
      </button>
    </div>
  );
};

export default ResultPage;
