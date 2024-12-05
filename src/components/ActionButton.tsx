import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  icon: LucideIcon;
  children: React.ReactNode;
  onClick: () => void;
}

export function ActionButton({ icon: Icon, children, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      <Icon size={20} />
      <span>{children}</span>
    </button>
  );
}