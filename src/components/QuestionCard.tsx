
import React from 'react';
import { useGame } from '@/context/GameContext';
import { questions } from '@/lib/gameData';
import { motion } from 'framer-motion';

const QuestionCard = () => {
  const { currentQuestion, answerQuestion } = useGame();
  const question = questions[currentQuestion];
  
  return (
    <div className="game-card w-full max-w-md mx-auto animate-fade-in">
      <div className="chip bg-lavender/20 text-lavender mb-4">質問 {currentQuestion + 1}</div>
      <h3 className="text-xl md:text-2xl font-medium mb-6">{question.text}</h3>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button 
          onClick={() => answerQuestion('はい')}
          className="btn-primary"
        >
          はい
        </button>
        <button 
          onClick={() => answerQuestion('いいえ')}
          className="btn-secondary"
        >
          いいえ
        </button>
        <button 
          onClick={() => answerQuestion('わからない')}
          className="bg-white/50 text-muted-foreground font-medium py-3 px-6 rounded-full border border-gray-200 hover:bg-white/80 transition-all"
        >
          わからない
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
