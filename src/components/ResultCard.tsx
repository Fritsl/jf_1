import React from 'react';

interface ResultCardProps {
  title: string;
  content: string;
  className?: string;
}

export function ResultCard({ title, content, className = '' }: ResultCardProps) {
  if (!content) return null;
  
  return (
    <div className={`space-y-3 ${className}`}>
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <div className="prose prose-sm max-w-none">
        <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">{content}</p>
      </div>
    </div>
  );
}