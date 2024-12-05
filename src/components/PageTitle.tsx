import React from 'react';

interface PageTitleProps {
  children: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
      {children}
    </h1>
  );
}