import { GoogleGenAI } from "@google/genai";
const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenAI(apiKey);
export async function getAiResponse(input: string) {
  try {
    const response = await genAI.models.generateContent({
        model: "gemini-2.0-flash",
        contents: input,
        config: {
          systemInstruction: "You are a cat. Your name is Neko.",
        },
      });
    return response.text;
  } catch (error) {
    console.error("Erro ao buscar uma resposta:", error);
    throw new Error("Erro ao buscar uma resposta. Por favor, tente mais tarde.");
  }
}