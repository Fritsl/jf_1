import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserType } from '../types/userTypes';

interface ContactDetailsProps {
  value: string;
  onChange: (value: string) => void;
  userType?: UserType;
}

export function ContactDetails({ value, onChange, userType }: ContactDetailsProps) {
  const { t } = useTranslation();
  const isHiring = userType === 'hiring';
  
  const placeholderKey = isHiring 
    ? 'contactDetailsPlaceholderHiring'
    : 'contactDetailsPlaceholder';
  
  const infoKey = isHiring
    ? 'contactDetailsInfoHiring'
    : 'contactDetailsInfo';
  
  const profileInfoKey = isHiring
    ? 'profileInfoHiring'
    : 'profileInfo';
  
  return (
    <div className="space-y-3">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t(placeholderKey)}
        className="w-full min-h-[120px] p-4 bg-white border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y transition-all duration-300 text-sm text-gray-700"
      />
      {value && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <p className="text-sm text-blue-800">
            {t(infoKey)}
          </p>
        </div>
      )}
      <p className="text-sm text-gray-500">
        {t(`${profileInfoKey}.prefix`)}{' '}
        <Link to="/dataenter" className="text-blue-600 hover:text-blue-700 underline">
          {t(`${profileInfoKey}.softValues`)}
        </Link>
        {t(`${profileInfoKey}.suffix`)}
      </p>
    </div>
  );
}