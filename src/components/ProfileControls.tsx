import React from 'react';
import { Pencil } from 'lucide-react';
import { ActionButton } from './ActionButton';

interface ProfileControlsProps {
  onEdit: () => void;
  allowContact: boolean;
  onAllowContactChange: (allow: boolean) => void;
}

export function ProfileControls({ onEdit, allowContact, onAllowContactChange }: ProfileControlsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <ActionButton icon={Pencil} onClick={onEdit}>
          Ret mine private oplysninger
        </ActionButton>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="allowContact"
            checked={allowContact}
            onChange={(e) => onAllowContactChange(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="allowContact" className="text-sm text-gray-600">
            Tillad relevante virksomheder at kontakte mig? Det er gratis, og du forbliver anonym med mindre du selv går i dialog med en virksomhed.
          </label>
        </div>
      </div>
    </div>
  );
}