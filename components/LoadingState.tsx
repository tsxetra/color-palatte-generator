import React from 'react';

export const LoadingState: React.FC = () => {
  return (
    <div className="text-center py-10 flex flex-col items-center justify-center space-y-4">
      <div className="w-8 h-8 border-2 border-[#D97706] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 tracking-wide animate-fade-in">Curating your palette...</p>
    </div>
  );
};