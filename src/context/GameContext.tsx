
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { characters, questions } from '@/lib/gameData';

type GameStage = 'intro' | 'playing' | 'result';

interface GameContextType {
  stage: GameStage;
  currentQuestion: number;
  answers: string[];
  targetCharacter: any;
  characterReaction: string;
  possibleCharacters: any[];
  startGame: () => void;
  answerQuestion: (answer: string) => void;
  resetGame: () => void;
  progress: number;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [stage, setStage] = useState<GameStage>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [targetCharacter, setTargetCharacter] = useState<any>(null);
  const [characterReaction, setCharacterReaction] = useState('neutral');
  const [possibleCharacters, setPossibleCharacters] = useState(characters);
  
  const progress = Math.min(100, (currentQuestion / questions.length) * 100);

  const startGame = () => {
    // Select a random character for the AI to think about
    const randomIndex = Math.floor(Math.random() * characters.length);
    setTargetCharacter(characters[randomIndex]);
    setStage('playing');
    setCurrentQuestion(0);
    setAnswers([]);
    setPossibleCharacters(characters);
    setCharacterReaction('thinking');
  };

  const answerQuestion = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    // Filter possible characters based on the answer
    const filteredCharacters = filterCharacters(possibleCharacters, currentQuestion, answer);
    setPossibleCharacters(filteredCharacters);
    
    // Set character reaction based on how close they are
    if (filteredCharacters.length < 3) {
      setCharacterReaction('excited');
    } else if (filteredCharacters.length < possibleCharacters.length / 2) {
      setCharacterReaction('happy');
    } else {
      setCharacterReaction('neutral');
    }
    
    // Move to the next question or end the game
    if (currentQuestion + 1 >= questions.length || filteredCharacters.length <= 1) {
      setStage('result');
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const resetGame = () => {
    setStage('intro');
    setTargetCharacter(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setPossibleCharacters(characters);
    setCharacterReaction('neutral');
  };
  
  // Helper function to filter characters based on the answer
  const filterCharacters = (chars: any[], questionIndex: number, answer: string) => {
    const question = questions[questionIndex];
    return chars.filter(char => {
      if (answer === 'はい') {
        return char.traits[question.trait] === true;
      } else if (answer === 'いいえ') {
        return char.traits[question.trait] === false;
      } else {
        return char.traits[question.trait] === null || char.traits[question.trait] === undefined;
      }
    });
  };

  return (
    <GameContext.Provider 
      value={{ 
        stage, 
        currentQuestion, 
        answers, 
        targetCharacter, 
        characterReaction, 
        possibleCharacters,
        startGame, 
        answerQuestion, 
        resetGame,
        progress
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
