import React from 'react';
import { useTranslation } from 'react-i18next';

interface AiFeedbackInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function AiFeedbackInput({ value, onChange }: AiFeedbackInputProps) {
  const { t } = useTranslation();
  
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={t('aiFeedbackPlaceholder')}
      className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none h-24"
    />
  );
}