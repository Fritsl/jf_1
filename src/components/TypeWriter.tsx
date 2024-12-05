import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  onComplete?: () => void;
  className?: string;
}

export function TypeWriter({ text, onComplete, className = '' }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 4); // Reduced from 15 to 4 for 4x speed

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, isComplete, onComplete]);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  if (!text) return null;

  return (
    <div className={`${className} ${isComplete ? 'hidden' : ''}`}>
      {displayedText}
      {!isComplete && (
        <span className="animate-pulse ml-0.5">|</span>
      )}
    </div>
  );
}