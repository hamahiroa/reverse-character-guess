
import React from 'react';
import { useGame } from '@/context/GameContext';
import { characterReactions } from '@/lib/gameData';
import { cn } from '@/lib/utils';

const Character = () => {
  const { characterReaction } = useGame();
  const reaction = characterReactions[characterReaction as keyof typeof characterReactions];

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Character container with animation */}
      <div className="relative animate-float">
        {/* Character image */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 bg-lavender rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-lavender to-skyblue opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 md:w-40 md:h-40 relative">
              {/* Face features */}
              <div className="absolute top-1/4 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <div className={cn(
                  "w-8 h-8 md:w-10 md:h-10 rounded-full", 
                  characterReaction === 'thinking' ? 'bg-slate-200' : 'bg-slate-800',
                  characterReaction === 'excited' && 'animate-pulse-soft'
                )}></div>
              </div>
              <div className="absolute top-1/4 right-1/4 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <div className={cn(
                  "w-8 h-8 md:w-10 md:h-10 rounded-full", 
                  characterReaction === 'thinking' ? 'bg-slate-200' : 'bg-slate-800',
                  characterReaction === 'excited' && 'animate-pulse-soft'
                )}></div>
              </div>
              
              {/* Mouth changes based on reaction */}
              <div className={cn(
                "absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-16 h-8 md:w-20 md:h-10",
                characterReaction === 'happy' || characterReaction === 'excited' || characterReaction === 'correct' 
                  ? 'border-b-4 border-slate-800 rounded-b-full' 
                  : characterReaction === 'thinking' 
                    ? 'w-8 h-8 bg-slate-200 rounded-full'
                    : 'w-12 h-1 md:w-16 md:h-2 bg-slate-800 rounded-full'
              )}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dialogue bubble */}
      <div className="glass-panel py-3 px-6 max-w-xs md:max-w-sm animate-bounce-in">
        <p className="text-sm md:text-base">{reaction.dialogue}</p>
      </div>
      
      {/* Magic particles effect */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i}
            className={cn(
              "absolute w-2 h-2 rounded-full opacity-70 animate-pulse-soft",
              i % 3 === 0 ? "bg-lavender" : i % 3 === 1 ? "bg-mint" : "bg-coral"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${(i * 0.2)}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Character;
