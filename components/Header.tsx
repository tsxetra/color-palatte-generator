import React from 'react';

const PaletteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2C14.7614 2 17 6.47715 17 12C17 17.5228 14.7614 22 12 22" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Header: React.FC = () => {
  return (
    <header className="p-4 sm:p-6 text-center">
      <div className="flex items-center justify-center space-x-3">
        <PaletteIcon />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#333]">
          Palette Creator
        </h1>
      </div>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Enter a concept, and our AI will curate a harmonious color scheme for your next project.
      </p>
    </header>
  );
};