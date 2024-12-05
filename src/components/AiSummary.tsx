import React, { useState } from 'react';
import { BadgeCheck } from 'lucide-react';
import { TypeWriter } from './TypeWriter';
import ReactMarkdown from 'react-markdown';
import { ContactDetails } from './ContactDetails';
import { useTranslation } from 'react-i18next';
import { UserType } from '../types/userTypes';

interface AiSummaryProps {
  summary: string;
  onEdit?: () => void;
  contactDetails: string;
  onContactDetailsChange: (value: string) => void;
  userType?: UserType;
}

export function AiSummary({ 
  summary, 
  onEdit,
  contactDetails,
  onContactDetailsChange,
  userType
}: AiSummaryProps) {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const { t } = useTranslation();
  const isHiring = userType === 'hiring';

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  return (
    <div className="space-y-6">
      <div className={`${isHiring ? 'bg-blue-50' : 'bg-gradient-to-r from-blue-50 to-indigo-50'} rounded-xl p-8 shadow-sm border border-blue-100`}>
        <div className="flex items-center gap-2 mb-6">
          <BadgeCheck className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">
            {isHiring ? t('jobDescription') : t('publicProfile')}
          </h2>
        </div>

        {/* Profile Document Section */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900">
              {isHiring ? 'Senior Developer Position' : 'Erfaren softwareudvikler med over 8 års erfaring'}
            </h3>
          </div>
          
          <div className="prose prose-lg max-w-none 
            [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-8 [&>h2]:mb-4
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul>li]:text-gray-700
            [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-4">
            <TypeWriter 
              text={summary}
              onComplete={handleTypingComplete}
              className="text-gray-700 leading-relaxed"
            />
            {isTypingComplete && (
              <ReactMarkdown className="text-gray-700 leading-relaxed">{summary}</ReactMarkdown>
            )}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-blue-100">
          <ContactDetails
            value={contactDetails}
            onChange={onContactDetailsChange}
            userType={userType}
          />
        </div>
      </div>
    </div>
  );
}