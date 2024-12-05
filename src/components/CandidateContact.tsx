import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Briefcase, Mail } from 'lucide-react';

interface CandidateContactProps {
  location: string;
  noticePeriod: string;
  workPreference: string;
  isAnonymous?: boolean;
  onRequestContact: () => void;
  credits: number;
}

export function CandidateContact({
  location,
  noticePeriod,
  workPreference,
  isAnonymous = true,
  onRequestContact,
  credits
}: CandidateContactProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        {t('candidateContact.availability')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-gray-700 mb-3">
            {t('candidateContact.status')}
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>{location}</span>
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{noticePeriod}</span>
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>{workPreference}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-700 mb-3">
            {t('candidateContact.contactPref')}
          </h4>
          {isAnonymous && (
            <div className="space-y-4">
              <p className="text-gray-600 flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                {t('candidateContact.anonymous')}
              </p>
              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  {t('candidateContact.instructions')}
                </p>
                <button 
                  onClick={onRequestContact}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('candidateContact.initiate')}
                </button>
                <p className="text-sm text-center text-gray-500">
                  {t('candidateContact.credits', { count: credits })}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}