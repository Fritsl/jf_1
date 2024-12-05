import { UserType } from '../types/userTypes';
import { mockJobMatches } from '../data/mockJobMatches';
import { mockCandidateMatches } from '../data/mockCandidateMatches';

export const getMatchData = (userType?: UserType) => {
  return userType === 'hiring' ? mockCandidateMatches : mockJobMatches;
};

export const getMatchTypeLabel = (userType?: UserType) => {
  return userType === 'hiring' ? 'Candidate' : 'Job';
};

export const getStrengthsLabel = (userType?: UserType) => {
  return userType === 'hiring' ? 'Strengths' : "Pro's";
};

export const getLimitationsLabel = (userType?: UserType) => {
  return userType === 'hiring' ? 'Limitations' : "Con's";
};

export const getViewButtonLabel = (userType?: UserType, credits: number) => {
  return userType === 'hiring' 
    ? `View candidate: ${credits} credits`
    : `View details: ${credits} credits`;
};