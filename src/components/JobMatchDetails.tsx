import React, { useState } from 'react';
import { DocumentGenerator } from './DocumentGenerator';
import { JobNotes } from './JobNotes';
import { useTranslation } from 'react-i18next';
import { UserType } from '../types/userTypes';

interface JobMatchDetailsProps {
  title: string;
  company?: string;
  userType?: UserType;
}

export function JobMatchDetails({ title, company, userType }: JobMatchDetailsProps) {
  const [activeTab, setActiveTab] = useState('description');
  const [notes, setNotes] = useState('');
  const { t } = useTranslation();
  const isHiring = userType === 'hiring';

  const getTabs = () => {
    if (isHiring) {
      return [
        { id: 'description', label: t('tabs.profile') },
        { id: 'viewCV', label: t('tabs.viewCV') },
        { id: 'report', label: t('tabs.report') },
        { id: 'notes', label: t('tabs.notes') }
      ];
    }

    return [
      { id: 'description', label: t('tabs.description') },
      { id: 'coverLetter', label: t('tabs.coverLetter') },
      { id: 'cv', label: t('tabs.cv') },
      { id: 'notes', label: t('tabs.notes') }
    ];
  };

  return (
    <div className="mt-6 border-t border-gray-100 pt-6 transition-all duration-300">
      {/* Company/Candidate contact info */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="whitespace-pre-wrap text-gray-700">
          {isHiring ? (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Candidate Contact Information</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-medium mb-2">Current Status</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>Location: Greater Copenhagen</li>
                    <li>Notice Period: 3 months</li>
                    <li>Work Preference: Hybrid/Remote</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Contact Preferences</p>
                  <p className="text-gray-600 mb-4">This candidate prefers to remain anonymous until initial contact.</p>
                  <button 
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => {}}
                  >
                    Request Introduction
                  </button>
                  <p className="text-sm text-center text-gray-500 mt-2">Uses 25 credits</p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-xl font-bold text-gray-900 mb-2">{company}</div>
              <div className="mt-2">
                Hovedgaden 123<br />
                2100 København Ø<br />
                Denmark<br />
                <br />
                Contact: John Doe<br />
                Email: jobs@{company?.toLowerCase().replace(/\s+/g, '')}.dk<br />
                Phone: +45 12 34 56 78
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Menu tabs */}
      <div className="flex flex-col sm:flex-row border-b border-gray-100 bg-gray-50 p-2 gap-2">
        {getTabs().map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === tab.id 
                ? 'bg-white text-blue-600 shadow-lg scale-[1.02] transform' 
                : 'text-gray-600 hover:bg-white/50'
            }`}
          >
            <span className="text-base">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="p-4 sm:p-6">
        {activeTab === 'description' && (
          <div className="whitespace-pre-wrap text-gray-700">
            {isHiring ? t('candidateProfile') : t('jobDescription')}
          </div>
        )}
        {(activeTab === 'coverLetter' || activeTab === 'cv' || activeTab === 'viewCV' || activeTab === 'report') && (
          <DocumentGenerator 
            type={activeTab as 'coverLetter' | 'cv' | 'viewCV' | 'candidateReport'}
            jobTitle={title}
            company={company || ''}
            userType={userType}
          />
        )}
        {activeTab === 'notes' && (
          <JobNotes
            value={notes}
            onChange={setNotes}
          />
        )}
      </div>
    </div>
  );
}