import React from 'react';

export const ShareIcons = () => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-500">Share:</span>
      <a href="#" aria-label="Share on Facebook" className="text-gray-600 hover:text-blue-600">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
        </svg>
      </a>
      <a href="#" aria-label="Share on Twitter" className="text-gray-600 hover:text-blue-400">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 5.9c-.7.33-1.46.55-2.25.65a3.9 3.9 0 0 0 1.72-2.16 7.8 7.8 0 0 1-2.48.95A3.9 3.9 0 0 0 12.2 8.9a11.06 11.06 0 0 1-8.03-4.07 3.9 3.9 0 0 0 1.21 5.2c-.64-.02-1.24-.2-1.77-.48v.05a3.9 3.9 0 0 0 3.13 3.82c-.58.16-1.2.18-1.79.07a3.9 3.9 0 0 0 3.64 2.71A7.83 7.83 0 0 1 2 18.4a11.04 11.04 0 0 0 5.98 1.75c7.18 0 11.1-5.95 11.1-11.1l-.01-.5A7.9 7.9 0 0 0 22 5.9Z" />
        </svg>
      </a>
      <a href="#" aria-label="Share on LinkedIn" className="text-gray-600 hover:text-blue-700">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.02c0-1.2-.02-2.75-1.67-2.75-1.68 0-1.94 1.3-1.94 2.66V21h-4V9Z" />
        </svg>
      </a>
    </div>
  );
};
