
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  async getLegalSummary(topic: string): Promise<string> {
    try {
      // Fix: Always use the most up-to-date API key from the environment and initialize a new client instance per request.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Eres un asistente experto de la revista Lex Corporativa. El usuario pregunta sobre: "${topic}". Proporciona un resumen breve, profesional y elegante sobre este tema legal, mencionando por qué es relevante para nuestra revista. Mantén el tono formal y académico.`,
        config: {
          temperature: 0.7,
          // Fix: Removed maxOutputTokens following guidelines to avoid truncation when not necessary.
        }
      });
      return response.text || "Lo siento, no pude generar una respuesta en este momento.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Hubo un error al conectar con nuestro asistente legal.";
    }
  }
}

export const geminiService = new GeminiService();
