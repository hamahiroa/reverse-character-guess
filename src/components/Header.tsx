
import React from 'react';
import { useGame } from '@/context/GameContext';
import { Progress } from '@/components/ui/progress';

const Header = () => {
  const { stage, progress } = useGame();
  
  return (
    <header className="w-full py-4 px-6 glass-panel mb-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-2">
          {/* Magic wand icon */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute w-1 h-6 bg-lavender rounded-full transform rotate-45"></div>
            <div className="absolute w-2 h-2 bg-coral rounded-full top-0 right-0 animate-pulse-soft"></div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-lavender to-coral bg-clip-text text-transparent">
            逆アキネーター
          </h1>
        </div>
        
        <p className="text-sm text-center text-muted-foreground max-w-md">
          {stage === 'intro' 
            ? '魔人の考えているキャラクターを当ててみよう！' 
            : stage === 'playing' 
              ? '質問に答えて、魔人の考えているキャラクターを絞り込もう！' 
              : '結果発表！上手く当てられたかな？'}
        </p>
        
        {stage === 'playing' && (
          <div className="w-full mt-4 max-w-md">
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
