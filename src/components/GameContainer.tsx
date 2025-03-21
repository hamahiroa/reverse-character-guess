
import React from 'react';
import { useGame } from '@/context/GameContext';
import Character from './Character';
import QuestionCard from './QuestionCard';
import ResultPage from './ResultPage';
import { Sparkles, Star, Cat, Dog, Rabbit, Bird, Fish } from 'lucide-react';

const AnimalFriend = ({ type, position, delay, size = 40 }) => {
  const animals = {
    cat: <Cat size={size} className="text-coral" />,
    dog: <Dog size={size} className="text-mint" />,
    rabbit: <Rabbit size={size} className="text-lavender" />,
    bird: <Bird size={size} className="text-skyblue" />,
    fish: <Fish size={size} className="text-amber-400" />
  };

  return (
    <div 
      className="absolute animate-float"
      style={{ 
        top: position.top, 
        left: position.left, 
        right: position.right,
        animationDelay: `${delay}s` 
      }}
    >
      {animals[type]}
    </div>
  );
};

const GameContainer = () => {
  const { stage, startGame } = useGame();
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center relative">
      {/* Animal friends decoration */}
      <AnimalFriend type="cat" position={{ top: '10%', left: '5%' }} delay={0.5} />
      <AnimalFriend type="dog" position={{ top: '20%', right: '5%' }} delay={1.2} />
      <AnimalFriend type="rabbit" position={{ top: '80%', left: '8%' }} delay={0.8} />
      <AnimalFriend type="bird" position={{ top: '15%', right: '15%' }} delay={1.5} />
      <AnimalFriend type="fish" position={{ top: '75%', right: '10%' }} delay={2} />
      
      {stage === 'intro' ? (
        <div className="game-card max-w-md mx-auto text-center animate-scale-in relative">
          <div className="absolute -top-6 -right-6">
            <Sparkles size={40} className="text-amber-400 animate-pulse-soft" />
          </div>
          
          <div className="mb-8">
            <Character />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">心を読む魔人</h2>
          <p className="mb-8 text-muted-foreground">
            私はあなたの心を読む魔人。今からあるキャラクターについて考えます。
            あなたは質問して、私が考えているキャラクターを当ててください！
          </p>
          
          <button 
            onClick={startGame}
            className="btn-primary w-full flex items-center justify-center"
          >
            <Star size={18} className="mr-2" />
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
