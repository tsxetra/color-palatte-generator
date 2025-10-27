import { GoogleGenAI, Type } from "@google/genai";
import type { Color } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function generatePalette(prompt: string): Promise<Color[]> {
  const fullPrompt = `As a senior color theorist and designer, generate a 5-color palette based on the theme: "${prompt}". The palette must be sophisticated and harmonious. For each color, provide an evocative, unique name. Return the response as a JSON array of objects. Each object must have "name" (string) and "hex" (string, a valid 7-character hex code like #RRGGBB) properties.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: {
                type: Type.STRING,
                description: "A creative, descriptive name for the color.",
              },
              hex: {
                type: Type.STRING,
                description: "The 7-character hexadecimal color code, starting with '#'.",
              },
            },
            required: ["name", "hex"],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const paletteData = JSON.parse(jsonText);
    
    if (!Array.isArray(paletteData) || paletteData.length === 0) {
      throw new Error("AI returned an invalid format.");
    }

    // Basic validation
    return paletteData.filter(
      (color: any): color is Color => 
        typeof color.name === 'string' &&
        typeof color.hex === 'string' &&
        /^#[0-9A-F]{6}$/i.test(color.hex)
    ).slice(0, 5); // Ensure only 5 colors are returned

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
}