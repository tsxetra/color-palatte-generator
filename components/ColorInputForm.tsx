import React from 'react';

interface ColorInputFormProps {
  prompt: string;
  setPrompt: (value: string) => void;
  handleGenerate: () => void;
  isLoading: boolean;
}

export const ColorInputForm: React.FC<ColorInputFormProps> = ({ prompt, setPrompt, handleGenerate, isLoading }) => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleGenerate();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., 'A quiet coastal library at dawn'"
        className="w-full px-5 py-3 bg-white/50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D97706]/50 focus:border-[#D97706] outline-none transition duration-300 placeholder-gray-400"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-[#D97706] text-white font-medium tracking-wide rounded-md hover:bg-[#B45309] transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        <span>Generate</span>
      </button>
    </form>
  );
};