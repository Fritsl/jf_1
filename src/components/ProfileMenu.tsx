import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserType } from '../types/userTypes';

interface ProfileMenuProps {
  onEdit: () => void;
  userType?: UserType;
}

export function ProfileMenu({ onEdit, userType }: ProfileMenuProps) {
  const { t } = useTranslation();
  
  return (
    <div className="flex justify-center gap-4 text-sm">
      <button
        onClick={onEdit}
        className="text-blue-600 hover:text-blue-700 transition-colors"
      >
        {t(userType === 'hiring' ? 'profileMenu.editJob' : 'profileMenu.edit')}
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => {}} // To be implemented
        className="text-blue-600 hover:text-blue-700 transition-colors"
      >
        {t(userType === 'hiring' ? 'profileMenu.deleteJob' : 'profileMenu.delete')}
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => {}} // To be implemented
        className="text-blue-600 hover:text-blue-700 transition-colors"
      >
        {t(userType === 'hiring' ? 'profileMenu.createNewJob' : 'profileMenu.create')}
      </button>
    </div>
  );
}