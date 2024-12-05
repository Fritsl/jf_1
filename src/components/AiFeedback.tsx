import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

interface AiFeedbackProps {
  message: string;
  isLoading?: boolean;
  onTypingComplete?: () => void;
}

export function AiFeedback({ message, isLoading = false, onTypingComplete }: AiFeedbackProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setDisplayedText('');
      setCurrentIndex(0);
      setIsTypingComplete(false);
      return;
    }

    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + message[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);

      return () => clearTimeout(timer);
    } else if (currentIndex === message.length && !isTypingComplete) {
      setIsTypingComplete(true);
      onTypingComplete?.();
    }
  }, [currentIndex, message, isLoading, isTypingComplete, onTypingComplete]);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTypingComplete(false);
  }, [message]);

  return (
    <div className="relative bg-blue-50 rounded-2xl shadow-sm p-6 border border-blue-100">
      <div className="absolute -left-3 top-6 w-6 h-6 transform rotate-45 bg-blue-50 border-l border-b border-blue-100"></div>
      
      <div className="absolute -left-12 top-4 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
        <MessageCircle className="w-6 h-6 text-blue-600" />
      </div>
      
      <div className="ml-2">
        {isLoading ? (
          <div className="flex gap-2 h-6 items-center">
            <div className="w-2.5 h-2.5 bg-blue-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2.5 h-2.5 bg-blue-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2.5 h-2.5 bg-blue-300 rounded-full animate-bounce"></div>
          </div>
        ) : (
          <p className="text-gray-700 leading-relaxed">
            {displayedText}
            {!isTypingComplete && (
              <span className="animate-pulse ml-0.5">|</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
}