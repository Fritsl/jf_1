import React from 'react';

interface MatchScoreMeterProps {
  score: number;
}

export function MatchScoreMeter({ score }: MatchScoreMeterProps) {
  // Calculate color based on score
  const getColorClasses = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 70) return 'bg-green-400';
    if (score >= 50) return 'bg-yellow-400';
    if (score >= 30) return 'bg-orange-400';
    return 'bg-red-500';
  };

  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full transition-all duration-500 ${getColorClasses(score)}`}
        style={{ width: `${score}%` }}
      />
    </div>
  );
}