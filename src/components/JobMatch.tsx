import React from 'react';
import { MapPin, ThumbsUp, ThumbsDown } from 'lucide-react';
import { MatchScoreMeter } from './MatchScoreMeter';
import { JobMatchDetails } from './JobMatchDetails';
import { UserType } from '../types/userTypes';

interface JobMatchProps {
  title: string;
  company?: string;
  location: string;
  pros: string[];
  cons: string[];
  score: number;
  credits: number;
  summary: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
  userType?: UserType;
}

export function JobMatch({ 
  title, 
  company, 
  location, 
  pros, 
  cons, 
  score, 
  credits,
  summary,
  isExpanded,
  onToggleExpand,
  userType
}: JobMatchProps) {
  const isHiring = userType === 'hiring';
  const buttonText = isHiring 
    ? `View candidate: ${credits} credits`
    : `View details: ${credits} credits`;

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 ${
      isExpanded ? 'ring-2 ring-blue-500' : ''
    }`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600 mb-1">Match Score</div>
          <div className="text-2xl font-bold text-blue-600 mb-2">{score}%</div>
          <MatchScoreMeter score={score} />
        </div>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-2">{summary}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ThumbsUp className="w-4 h-4 text-green-600" />
            <span className="font-medium text-gray-900">
              {isHiring ? 'Strengths' : "Pro's"}
            </span>
          </div>
          <ul className="space-y-1">
            {pros.map((pro, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1 h-1 bg-green-600 rounded-full"></span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ThumbsDown className="w-4 h-4 text-red-600" />
            <span className="font-medium text-gray-900">
              {isHiring ? 'Limitations' : "Con's"}
            </span>
          </div>
          <ul className="space-y-1">
            {cons.map((con, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-end items-center pt-4 border-t border-gray-100">
        <button 
          onClick={onToggleExpand}
          className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
            isExpanded ? 'ring-2 ring-blue-300' : ''
          }`}
        >
          {buttonText}
        </button>
      </div>

      {isExpanded && (
        <JobMatchDetails
          title={title}
          company={company}
          userType={userType}
        />
      )}
    </div>
  );
}