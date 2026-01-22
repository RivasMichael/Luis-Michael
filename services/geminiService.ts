
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY });
  }

  async getLegalSummary(topic: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Eres un asistente experto de la revista Lex Corporativa. El usuario pregunta sobre: "${topic}". Proporciona un resumen breve, profesional y elegante sobre este tema legal, mencionando por qué es relevante para nuestra revista. Mantén el tono formal y académico.`,
        config: {
          temperature: 0.7,
          maxOutputTokens: 250,
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
