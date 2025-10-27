import React, { useState } from 'react';
import type { Color } from '../types';

interface PaletteDisplayProps {
  palette: Color[];
}

interface ColorBoxProps {
  color: Color;
}

const CopyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2V8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);


const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full">
      <div
        className="h-48 sm:h-56 md:h-64 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        style={{ backgroundColor: color.hex }}
      ></div>
      <div className="mt-3 text-center">
        <p className="font-medium text-gray-800 truncate">{color.name}</p>
        <button
          onClick={handleCopy}
          className="mt-1 px-3 py-1 text-sm text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-[#D97706]/50 flex items-center justify-center mx-auto gap-1.5"
        >
          {copied ? <CheckIcon className="text-green-500" /> : <CopyIcon />}
          <span>{color.hex.toUpperCase()}</span>
        </button>
      </div>
    </div>
  );
};

export const PaletteDisplay: React.FC<PaletteDisplayProps> = ({ palette }) => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8 animate-fade-in">
      {palette.map((color) => (
        <ColorBox key={color.hex} color={color} />
      ))}
    </div>
  );
};