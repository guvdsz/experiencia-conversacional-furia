import React, { useState } from "react";
import { AIContext } from "./AiContext";
import { getAiResponse } from "../IA";

export const AIProvider = ({ children }: React.PropsWithChildren) => {
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchResponse = async (input: string) => {
    setLoading(true);
    try {
      const history = responses.join("\n");
      const fullInput = `${history}\nUsuário: ${input}`;
      const aiResponse = await getAiResponse(fullInput);

      if (!aiResponse) {
        console.log("Nenhuma resposta recebida do modelo.");
        return;
      }
      setResponses((prevResponses) => [...prevResponses, input, aiResponse]);
    } catch (error) {
      console.error(error);
      setError("Erro ao buscar uma resposta. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AIContext.Provider value={{ loading, responses, fetchResponse, error }}>
      {children}
    </AIContext.Provider>
  );
};
