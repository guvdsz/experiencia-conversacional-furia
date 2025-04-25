import { useContext } from "react";
import { AIContext } from "../context/AiContext";

export const useAI = () => {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error("useAI deve ser usado dentro de um AIProvider");
  }
  return context;
};