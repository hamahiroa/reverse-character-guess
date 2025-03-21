
import React from 'react';
import Header from '@/components/Header';
import GameContainer from '@/components/GameContainer';
import { GameProvider } from '@/context/GameContext';
import { Star, Cloud, Sun, Moon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-lavender/10 flex flex-col items-center p-4 pb-16">
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Background decoration elements */}
        <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-mint/10 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-lavender/10 animate-spin-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-20 h-20 rounded-full bg-coral/10 animate-spin-slow" style={{ animationDelay: '4s' }}></div>
        
        {/* Sky elements */}
        <div className="absolute top-20 left-[15%]">
          <Sun size={40} className="text-amber-300/70" />
        </div>
        <div className="absolute top-40 right-[20%]">
          <Moon size={30} className="text-lavender/70" />
        </div>
        <div className="absolute top-1/3 left-[40%]">
          <Cloud size={50} className="text-white/80" />
        </div>
        <div className="absolute top-1/5 right-[30%]">
          <Cloud size={35} className="text-white/60" />
        </div>
        
        {/* Stars in background */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={`star-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Star 
              size={Math.random() * 10 + 5} 
              fill="#FFD700" 
              stroke="#FFD700" 
              className="animate-pulse-soft"
              style={{
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          </div>
        ))}
        
        {/* Sparkling effects */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white opacity-70 animate-pulse-soft"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${(i * 0.2)}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <GameProvider>
        <Header />
        <GameContainer />
      </GameProvider>
    </div>
  );
};

export default Index;
