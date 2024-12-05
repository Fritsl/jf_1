import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from '../components/Layout';
import { LogoTitle } from '../components/LogoTitle';

export function FrontPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handlePathSelection = (userType: 'hiring' | 'seeking') => {
    navigate('/dataenter', { state: { userType } });
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center min-h-[calc(100vh-400px)] py-20">
        <div className="w-full max-w-3xl mx-auto px-4">
          <LogoTitle />
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-16">
            {t('welcomeText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => handlePathSelection('hiring')}
              className="flex-1 px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('iAmHiring')}
            </button>
            <button
              onClick={() => handlePathSelection('seeking')}
              className="flex-1 px-8 py-4 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition-colors"
            >
              {t('iAmJobSeeking')}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}