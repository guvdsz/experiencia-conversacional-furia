import { createContext } from "react";

interface AIContextType {
  loading: boolean;
  responses: string[];
  error: string | null;
  fetchResponse: (input: string) => Promise<void>;
}

export const AIContext = createContext<AIContextType | undefined>(undefined);
