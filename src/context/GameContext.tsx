
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { characters } from '@/lib/gameData';
import { toast } from '@/components/ui/use-toast';

type GameStage = 'intro' | 'playing' | 'result';

interface GameContextType {
  stage: GameStage;
  askedQuestions: string[];
  answers: string[];
  targetCharacter: any;
  characterReaction: string;
  possibleCharacters: any[];
  startGame: () => void;
  answerQuestion: (question: string) => void;
  resetGame: () => void;
  progress: number;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [stage, setStage] = useState<GameStage>('intro');
  const [askedQuestions, setAskedQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [targetCharacter, setTargetCharacter] = useState<any>(null);
  const [characterReaction, setCharacterReaction] = useState('neutral');
  const [possibleCharacters, setPossibleCharacters] = useState(characters);
  
  const progress = Math.min(100, (askedQuestions.length / 10) * 100);

  const startGame = () => {
    // Select a random character for the AI to think about
    const randomIndex = Math.floor(Math.random() * characters.length);
    setTargetCharacter(characters[randomIndex]);
    setStage('playing');
    setAskedQuestions([]);
    setAnswers([]);
    setPossibleCharacters(characters);
    setCharacterReaction('thinking');
    
    // Delay to simulate the character "thinking"
    setTimeout(() => {
      setCharacterReaction('neutral');
      toast({
        title: "ゲームスタート！",
        description: "私はあるキャラクターについて考えています。質問して当ててみてください！",
      });
    }, 1500);
  };

  const answerQuestion = (question: string) => {
    // First, set character to thinking state
    setCharacterReaction('thinking');
    
    const newQuestions = [...askedQuestions, question];
    setAskedQuestions(newQuestions);
    
    // Simulate AI "thinking" about the answer
    setTimeout(() => {
      // Generate a response based on the character and question
      const response = getAIResponse(question, targetCharacter);
      const newAnswers = [...answers, response];
      setAnswers(newAnswers);
      
      // Filter characters based on user progress
      const remainingCharacters = 
        newQuestions.length > 3 
          ? possibleCharacters.filter((_, index) => 
              index % Math.max(1, Math.ceil(possibleCharacters.length / 3)) === 0
            )
          : possibleCharacters;
      
      setPossibleCharacters(remainingCharacters);
      
      // Set character reaction based on progress
      if (remainingCharacters.length <= 3) {
        setCharacterReaction('excited');
      } else if (newQuestions.length >= 5) {
        setCharacterReaction('happy');
      } else {
        setCharacterReaction('neutral');
      }
      
      // End game after 10 questions or when down to 1-2 characters
      if (newQuestions.length >= 10 || remainingCharacters.length <= 2) {
        setTimeout(() => {
          setStage('result');
        }, 1000);
      }
    }, 2000); // 2-second delay to simulate thinking
  };
  
  const resetGame = () => {
    setStage('intro');
    setTargetCharacter(null);
    setAskedQuestions([]);
    setAnswers([]);
    setPossibleCharacters(characters);
    setCharacterReaction('neutral');
  };
  
  // Simple AI response generator based on character traits and question
  const getAIResponse = (question: string, character: any) => {
    const questionLower = question.toLowerCase();
    let answer = "わからない";
    
    // Very basic NLP to determine response
    if (questionLower.includes("女性") || questionLower.includes("女の子")) {
      answer = character.traits.female ? "はい" : "いいえ";
    } else if (questionLower.includes("若い") || questionLower.includes("子供")) {
      answer = character.traits.young ? "はい" : "いいえ";
    } else if (questionLower.includes("有名") || questionLower.includes("知られて")) {
      answer = character.traits.famous ? "はい" : "いいえ";
    } else if (questionLower.includes("架空") || questionLower.includes("フィクション")) {
      answer = character.traits.fictional ? "はい" : "いいえ";
    } else if (questionLower.includes("現実") || questionLower.includes("実在")) {
      answer = character.traits.fictional ? "いいえ" : "はい";
    } else if (questionLower.includes("アニメ") || questionLower.includes("漫画")) {
      answer = character.traits.anime ? "はい" : "いいえ";
    } else if (questionLower.includes("歴史") || questionLower.includes("昔の")) {
      answer = character.traits.historical ? "はい" : "いいえ";
    } else if (questionLower.includes("日本")) {
      answer = character.traits.japanese ? "はい" : "いいえ";
    } else if (questionLower.includes("ヒーロー") || questionLower.includes("主人公")) {
      answer = character.traits.hero ? "はい" : "いいえ";
    } else if (questionLower.includes("魔法") || questionLower.includes("超能力")) {
      answer = character.traits.magical ? "はい" : "いいえ";
    } else {
      // Some randomness for unknown questions
      const responses = ["はい", "いいえ", "わからない"];
      answer = responses[Math.floor(Math.random() * responses.length)];
    }
    
    return answer;
  };

  return (
    <GameContext.Provider 
      value={{ 
        stage, 
        askedQuestions, 
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
