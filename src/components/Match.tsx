import React from 'react';
import { useTranslation } from 'react-i18next';
import { Credits } from './Credits';
import { JobMatchList } from './JobMatchList';
import { UserType } from '../types/userTypes';
import { getMatchTitle, getMatchDescription } from '../utils/matchUtils';

interface MatchProps {
  userType?: UserType;
}

export function Match({ userType }: MatchProps) {
  const { t } = useTranslation();
  const credits = 250; // This should come from your state management system

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
        {t(getMatchTitle(userType))}
      </h2>
      <p className="text-gray-600 text-center mb-8">
        {getMatchDescription(userType)}
      </p>
      <div className="space-y-6">
        <Credits credits={credits} userType={userType} />
        <JobMatchList userType={userType} />
      </div>
    </div>
  );
}