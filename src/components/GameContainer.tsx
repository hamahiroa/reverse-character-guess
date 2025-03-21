
import React from 'react';
import { useGame } from '@/context/GameContext';
import Character from './Character';
import QuestionCard from './QuestionCard';
import ResultPage from './ResultPage';

const GameContainer = () => {
  const { stage, startGame } = useGame();
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
      {stage === 'intro' ? (
        <div className="game-card max-w-md mx-auto text-center animate-scale-in">
          <div className="mb-8">
            <Character />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">心を読む魔人</h2>
          <p className="mb-8 text-muted-foreground">
            私はあなたの心を読む魔人。今からあるキャラクターについて考えます。
            あなたは私に質問して、私が考えているキャラクターを当ててください！
          </p>
          
          <button 
            onClick={startGame}
            className="btn-primary w-full"
          >
            ゲームを始める
          </button>
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <Character />
          </div>
          
          <div className="w-full md:w-2/3">
            {stage === 'playing' ? <QuestionCard /> : <ResultPage />}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameContainer;
