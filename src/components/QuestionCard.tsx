
import React from 'react';
import { useGame } from '@/context/GameContext';
import { questions } from '@/lib/gameData';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

const QuestionCard = () => {
  const { currentQuestion, answerQuestion } = useGame();
  const question = questions[currentQuestion];
  
  return (
    <div className="game-card w-full max-w-md mx-auto animate-fade-in">
      <div className="chip bg-lavender/20 text-lavender mb-4 flex items-center">
        <Sparkles size={16} className="mr-1" />
        質問 {currentQuestion + 1}
      </div>
      <h3 className="text-xl md:text-2xl font-medium mb-6">
        {question.text}
        <span className="inline-block animate-bounce-in ml-2">
          <Star size={20} fill="#FFD700" stroke="#FFD700" className="inline" />
        </span>
      </h3>
      
      <p className="text-sm text-muted-foreground mb-6">
        魔人に質問してキャラクターを絞り込もう！この質問の答えは？
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button 
          onClick={() => answerQuestion('はい')}
          className="btn-primary flex items-center justify-center"
        >
          <Heart size={16} className="mr-2 animate-pulse-soft" />
          はい
        </button>
        <button 
          onClick={() => answerQuestion('いいえ')}
          className="btn-secondary flex items-center justify-center"
        >
          いいえ
        </button>
        <button 
          onClick={() => answerQuestion('わからない')}
          className="bg-white/50 text-muted-foreground font-medium py-3 px-6 rounded-full border border-gray-200 hover:bg-white/80 transition-all flex items-center justify-center"
        >
          わからない
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
