import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ColorInputForm } from './components/ColorInputForm';
import { PaletteDisplay } from './components/PaletteDisplay';
import { WelcomePlaceholder } from './components/WelcomePlaceholder';
import { LoadingState } from './components/LoadingState';
import { generatePalette } from './services/geminiService';
import type { Color } from './types';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [palette, setPalette] = useState<Color[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setPalette(null);

    try {
      const generatedPalette = await generatePalette(prompt);
      setPalette(generatedPalette);
    } catch (err) {
      console.error(err);
      setError('Failed to generate palette. The AI might be busy. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#333] font-sans flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-8">
          <ColorInputForm
            prompt={prompt}
            setPrompt={setPrompt}
            handleGenerate={handleGenerate}
            isLoading={isLoading}
          />

          {error && (
            <div className="mt-4 text-red-800 bg-red-100 p-3 rounded-md border border-red-300 w-full max-w-md text-center">
              <p>{error}</p>
            </div>
          )}

          <div className="w-full mt-8">
            {isLoading && <LoadingState />}
            {!isLoading && palette && <PaletteDisplay palette={palette} />}
            {!isLoading && !palette && !error && <WelcomePlaceholder />}
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-gray-400 text-xs tracking-wider">
        <p>An AI-powered design tool</p>
      </footer>
    </div>
  );
};

export default App;