import React from 'react';
import { ResultCard } from './ResultCard';

interface ResultSectionProps {
  additionalText: string;
}

export function ResultSection({ additionalText }: ResultSectionProps) {
  return (
    <div className="space-y-6 bg-white rounded-xl p-8 shadow-sm">
      {additionalText && (
        <ResultCard 
          title="Yderligere information"
          content={additionalText}
        />
      )}
    </div>
  );
}