import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface PrivacyNoticeProps {
  children: React.ReactNode;
  className?: string;
  actionLink?: {
    text: string;
    onClick: () => void;
  };
}

export function PrivacyNotice({ children, className = '', actionLink }: PrivacyNoticeProps) {
  return (
    <div className={`flex items-start gap-3 px-4 ${className}`}>
      <ShieldCheck className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
      <div className="text-sm text-gray-500">
        <span>{children}</span>
        {actionLink && (
          <>
            {' '}
            <button
              onClick={actionLink.onClick}
              className="text-blue-600 hover:text-blue-700 transition-colors underline"
            >
              {actionLink.text}
            </button>
          </>
        )}
      </div>
    </div>
  );
}