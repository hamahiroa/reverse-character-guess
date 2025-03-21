
import React from 'react';
import { useGame } from '@/context/GameContext';
import { Progress } from '@/components/ui/progress';
import { Wand2, SearchCheck, Trophy, HelpCircle } from 'lucide-react';

const Header = () => {
  const { stage, progress } = useGame();
  
  return (
    <header className="w-full py-4 px-6 glass-panel mb-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-2">
          {/* Magic wand icon */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Wand2 className="text-lavender" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-lavender to-coral bg-clip-text text-transparent">
            逆アキネーター
          </h1>
        </div>
        
        <p className="text-sm text-center text-muted-foreground max-w-md flex items-center">
          {stage === 'intro' ? (
            <>
              <HelpCircle size={16} className="inline mr-1 text-lavender" />
              魔人の考えているキャラクターを当ててみよう！
            </>
          ) : stage === 'playing' ? (
            <>
              <SearchCheck size={16} className="inline mr-1 text-mint" />
              質問して、魔人の考えているキャラクターを絞り込もう！
            </>
          ) : (
            <>
              <Trophy size={16} className="inline mr-1 text-amber-400" />
              結果発表！上手く当てられたかな？
            </>
          )}
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
