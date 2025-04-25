import React, { useState } from "react";
import { AIContext } from "./AiContext";
import { getAiResponse } from "../IA";

export type Response = {
  text: string;
  role: "user" | "assistant";
}

export const AIProvider = ({ children }: React.PropsWithChildren) => {
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState<Response[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchResponse = async (input: string) => {
    setLoading(true);
    try {
      const history = responses.map(response => response.text).join("\n");
      const fullInput = `${history}\nUsuário: ${input}`;
      const aiResponse = await getAiResponse(fullInput);

      if (!aiResponse) {
        console.log("Nenhuma resposta recebida do modelo.");
        return;
      }
      setResponses((prevResponses) => [...prevResponses, {text: aiResponse, role: "assistant"}]);
    } catch (error) {
      console.error(error);
      setError("Erro ao buscar uma resposta. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AIContext.Provider value={{ loading, responses, fetchResponse, error, setResponses }}>
      {children}
    </AIContext.Provider>
  );
};
