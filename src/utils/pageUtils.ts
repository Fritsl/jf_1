import { UserType } from '../types/userTypes';

export const getPageTitle = (path: string, userType?: UserType): string => {
  if (path === '/dataenter' && userType === 'hiring') {
    return 'internalJobDescription';
  }
  
  switch (path) {
    case '/':
      return 'frontPage';
    case '/dataenter':
      return 'dataEnterPage';
    case '/result':
      return 'resultPage';
    default:
      return '';
  }
};