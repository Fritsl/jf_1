import React from 'react';
import { Wand2 } from 'lucide-react';

export function LogoTitle() {
  return (
    <div className="flex items-center justify-center gap-3 mb-8 -ml-8">
      <div className="animate-[wave_2s_ease-in-out_infinite]">
        <Wand2 className="h-10 w-10" />
      </div>
      <span className="text-4xl font-bold text-gray-900">JobFantastic</span>
    </div>
  );
}