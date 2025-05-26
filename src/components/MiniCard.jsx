import { MessageCircle, ClipboardCheck } from 'lucide-react'; // Optional: andere Icons möglich
import React from 'react';

export default function MiniCard({ title, description, icon = 'message' }) {
  const icons = {
    message: <MessageCircle className="w-6 h-6 text-sky-600" />,
    check: <ClipboardCheck className="w-6 h-6 text-sky-600" />,
  };

  return (
    <div className="flex items-start gap-4 bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-md transition transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex-shrink-0 mt-1">
        {icons[icon] || icons.message}
      </div>
      <div>
        <h3 className="text-base font-semibold text-neutral-900 mb-1">{title}</h3>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </div>
  );
}
