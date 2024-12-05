import React from 'react';
import { LanguageSelector } from './LanguageSelector';
import { Logo } from './Logo';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getPageTitle } from '../utils/pageUtils';
import { UserType } from '../types/userTypes';

export function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const isHomePage = location.pathname === '/';
  const userType = location.state?.userType as UserType;

  const titleKey = getPageTitle(location.pathname, userType);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-6">
          {!isHomePage && (
            <h2 className="text-lg font-semibold text-gray-100 hidden md:block">
              {t(titleKey)}
            </h2>
          )}
          {isHomePage && <LanguageSelector />}
        </div>
      </div>
    </header>
  );
}