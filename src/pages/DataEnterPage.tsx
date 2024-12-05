import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TextInput } from '../components/TextInput';
import { Layout } from '../components/Layout';
import { PageTitle } from '../components/PageTitle';
import { AiFeedback } from '../components/AiFeedback';
import { PrivacyNotice } from '../components/PrivacyNotice';
import { getBackgroundColorClass } from '../utils/colorUtils';
import { UserType } from '../types/userTypes';

export function DataEnterPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [usersOwnText, setUsersOwnText] = useState('');
  const [additionalText, setAdditionalText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [shouldFocusInput, setShouldFocusInput] = useState(false);
  const { t } = useTranslation();

  // Get userType from location state
  const userType = location.state?.userType as UserType;
  const backgroundColorClass = getBackgroundColorClass(userType);
  const pageTitle = userType === 'hiring' ? t('dataEnterPageTitleHiring') : t('dataEnterPageTitle');
  const feedbackPlaceholder = userType === 'hiring' ? t('aiFeedbackPlaceholderHiring') : t('aiFeedbackPlaceholder');
  const additionalInfoPlaceholder = userType === 'hiring' ? t('enterAdditionalInfoHiring') : t('enterAdditionalInfo');
  const privacyNoteText = userType === 'hiring' ? t('privacyNoteHiring') : t('privacyNote');

  // Initialize text fields from location state if available
  useEffect(() => {
    if (location.state?.text) {
      setUsersOwnText(location.state.text);
    }
    if (location.state?.additionalText) {
      setAdditionalText(location.state.additionalText);
    }
  }, [location.state]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleTypingComplete = () => {
    setShouldFocusInput(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/result', {
      state: {
        initialText: usersOwnText,
        additionalText,
        userType, // Pass userType to ResultPage
      },
    });
  };

  // Redirect to home if no userType is set
  useEffect(() => {
    if (!userType) {
      navigate('/');
    }
  }, [userType, navigate]);

  if (!userType) return null;

  return (
    <Layout>
      <div className={`min-h-screen ${backgroundColorClass}`}>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8 p-8">
          <div className="space-y-2">
            <PageTitle>{pageTitle}</PageTitle>
          </div>

          <div className="space-y-8">
            <div className="relative pl-12">
              <AiFeedback 
                message={feedbackPlaceholder}
                isLoading={isLoading}
                onTypingComplete={handleTypingComplete}
              />
            </div>
            
            <TextInput
              value={usersOwnText}
              onChange={setUsersOwnText}
              placeholder={additionalInfoPlaceholder}
              autoFocus={shouldFocusInput}
            />
          </div>

          <div className="flex items-center justify-between gap-8">
            <PrivacyNotice>
              {privacyNoteText}
            </PrivacyNotice>
            <button
              type="submit"
              className={`px-8 py-3 ${userType === 'hiring' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'} text-white text-lg font-medium rounded-lg transition-colors whitespace-nowrap`}
            >
              {t('viewResult')}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}