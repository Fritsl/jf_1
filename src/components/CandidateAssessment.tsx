import React from 'react';
import { Star, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SkillRating {
  name: string;
  rating: number;
  comment: string;
}

interface CandidateAssessmentProps {
  skills: SkillRating[];
  overallRating: number;
  recommendation: string;
  concerns?: string[];
}

export function CandidateAssessment({ 
  skills, 
  overallRating, 
  recommendation,
  concerns 
}: CandidateAssessmentProps) {
  const { t } = useTranslation();

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {t('assessment.overallRating')}
        </h3>
        <div className="flex items-center gap-4 mb-2">
          {renderStars(overallRating)}
          <span className="text-lg font-medium text-gray-700">
            {overallRating}/5
          </span>
        </div>
        <p className="text-gray-600">{recommendation}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {t('assessment.skillEvaluation')}
        </h3>
        <div className="grid gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 border border-gray-100"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900">{skill.name}</span>
                {renderStars(skill.rating)}
              </div>
              <p className="text-sm text-gray-600">{skill.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {concerns && concerns.length > 0 && (
        <div className="bg-orange-50 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            <h3 className="text-lg font-semibold text-gray-900">
              {t('assessment.concerns')}
            </h3>
          </div>
          <ul className="space-y-2">
            {concerns.map((concern, index) => (
              <li 
                key={index}
                className="text-gray-600 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                {concern}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}