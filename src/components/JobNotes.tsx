import React from 'react';
import { FileEdit } from 'lucide-react';
import { RichTextEditor } from './RichTextEditor';

interface JobNotesProps {
  value: string;
  onChange: (value: string) => void;
}

export function JobNotes({ value, onChange }: JobNotesProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <FileEdit className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-medium text-gray-900">My Notes</h3>
      </div>
      <RichTextEditor
        value={value}
        onChange={onChange}
      />
      <p className="text-sm text-gray-500 italic">
        Your notes are private and only visible to you
      </p>
    </div>
  );
}