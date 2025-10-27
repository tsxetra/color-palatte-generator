import React from 'react';

const PaletteSymbolIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" stroke="#D1D5DB" strokeWidth="2"/>
        <path d="M42.3925 42.3925C37.5684 47.2166 32.0001 49.3333 32.0001 49.3333C32.0001 49.3333 26.4318 47.2166 21.6077 42.3925C16.7836 37.5684 14.6668 32 14.6668 32C14.6668 32 16.7836 26.4317 21.6077 21.6076C26.4318 16.7835 32.0001 14.6667 32.0001 14.6667C32.0001 14.6667 37.5684 16.7835 42.3925 21.6076C47.2166 26.4317 49.3334 32 49.3334 32C49.3334 32 47.2166 37.5684 42.3925 42.3925Z" fill="#F8F5F2" stroke="#D1D5DB" strokeWidth="2"/>
        <circle cx="32" cy="32" r="5.33333" fill="#D1D5DB"/>
    </svg>
);

export const WelcomePlaceholder: React.FC = () => {
  return (
    <div className="text-center py-24 px-4 flex flex-col items-center justify-center space-y-6 animate-fade-in">
      <PaletteSymbolIcon aria-hidden="true" />
      <h3 className="text-2xl font-semibold text-gray-800">Artistry Begins Here</h3>
      <p className="text-gray-500 max-w-md">
        Describe a feeling, place, or idea in the input above. Your beautifully curated palette will appear here.
      </p>
    </div>
  );
};