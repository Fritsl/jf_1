import { UserType } from '../types/userTypes';

export const getMatchTitle = (userType?: UserType): string => {
  return userType === 'hiring' ? 'matchCandidates' : 'match';
};

export const getMatchDescription = (userType?: UserType): string => {
  return userType === 'hiring' 
    ? 'Based on your job description, here are the most suitable candidates:'
    : 'Based on your profile, here are the most suitable job matches:';
};