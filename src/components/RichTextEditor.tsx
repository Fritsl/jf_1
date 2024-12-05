import React from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 border-b px-3 py-2 flex gap-2">
        <button className="p-1 hover:bg-gray-200 rounded">
          <span className="font-bold">B</span>
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <span className="italic">I</span>
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <span className="underline">U</span>
        </button>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-64 p-4 text-sm font-mono resize-none focus:outline-none"
        readOnly
      />
    </div>
  );
}