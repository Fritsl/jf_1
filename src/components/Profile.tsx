import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiSummary } from './AiSummary';
import { ResultSection } from './ResultSection';
import { ProfileMenu } from './ProfileMenu';
import { UserType } from '../types/userTypes';
import { getProfileSummary } from '../utils/profileUtils';

interface ProfileProps {
  initialText?: string;
  additionalText?: string;
  onEdit: () => void;
  allowContact: boolean;
  onAllowContactChange: (checked: boolean) => void;
  userType?: UserType;
}

export function Profile({
  initialText,
  additionalText,
  onEdit,
  allowContact,
  onAllowContactChange,
  userType,
}: ProfileProps) {
  const { t } = useTranslation();
  const [contactDetails, setContactDetails] = React.useState('');
  
  const aiSummary = getProfileSummary(userType);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
        {t(userType === 'hiring' ? 'jobDescription' : 'profile')}
      </h2>
      <div className="space-y-6">
        <ProfileMenu onEdit={onEdit} userType={userType} />
        
        <AiSummary 
          summary={aiSummary} 
          onEdit={onEdit}
          contactDetails={contactDetails}
          onContactDetailsChange={setContactDetails}
        />
        
        {additionalText && (
          <ResultSection 
            additionalText={additionalText}
          />
        )}
      </div>
    </div>
  );
}