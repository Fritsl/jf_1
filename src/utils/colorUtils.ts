import { UserType } from '../types/userTypes';

export const getBackgroundColorClass = (userType?: UserType): string => {
  switch (userType) {
    case 'hiring':
      return 'bg-blue-50';
    case 'seeking':
      return 'bg-green-50';
    default:
      return 'bg-gray-50';
  }
};