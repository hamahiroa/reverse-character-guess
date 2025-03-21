
import React, { useState } from 'react';
import { useGame } from '@/context/GameContext';
import { motion } from 'framer-motion';
import { Heart, Wand, Sparkles, Send, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const QuestionCard = () => {
  const { answerQuestion, characterReaction } = useGame();
  const [question, setQuestion] = useState('');
  
  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      toast({
        title: "質問を入力してください",
        description: "魔人に何か質問してみましょう！",
        variant: "destructive"
      });
      return;
    }
    
    answerQuestion(question);
    setQuestion('');
  };
  
  return (
    <div className="game-card w-full max-w-md mx-auto animate-fade-in">
      <div className="chip bg-lavender/20 text-lavender mb-4 flex items-center">
        <Wand size={16} className="mr-1" />
        魔人に質問する
      </div>
      
      <h3 className="text-xl md:text-2xl font-medium mb-6">
        考えているキャラクターについて質問してください
        <motion.span 
          className="inline-block ml-2"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <Sparkles size={20} className="text-amber-400" />
        </motion.span>
      </h3>
      
      <p className="text-sm text-muted-foreground mb-6">
        質問は「はい」「いいえ」「わからない」で答えられるものにしてください
      </p>
      
      <form onSubmit={handleSubmitQuestion} className="mb-6">
        <div className="flex items-center gap-2">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="例：このキャラクターは女性ですか？"
            className="flex-1"
          />
          <button 
            type="submit"
            className="btn-primary p-2 rounded-full"
            disabled={characterReaction === 'thinking'}
          >
            <Send size={18} />
          </button>
        </div>
      </form>
      
      <div className="mt-4 text-sm text-muted-foreground">
        <p>おすすめの質問:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {["このキャラクターは女性ですか？", "このキャラクターは若いですか？", "このキャラクターは有名ですか？"].map((q, i) => (
            <button
              key={i}
              onClick={() => setQuestion(q)}
              className="text-xs bg-muted px-3 py-1 rounded-full hover:bg-muted/80 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
