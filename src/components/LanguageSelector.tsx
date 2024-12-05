import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

export function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-5 w-5 text-gray-300" />
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="appearance-none bg-gray-800 border border-gray-700 rounded-md py-1 pl-2 pr-8 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[160px] hover:border-gray-600 transition-colors"
        style={{ textAlignLast: 'left' }}
      >
        {languages.map((lang) => (
          <option 
            key={lang.code} 
            value={lang.code}
            className="flex items-center gap-2 bg-gray-800"
          >
            {`${lang.flag} ${lang.name}`}
          </option>
        ))}
      </select>
    </div>
  );
}