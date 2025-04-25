import { createContext } from "react";
import { Response } from "./AiProvider";
interface AIContextType {
  loading: boolean;
  responses: Response[];
  error: string | null;
  fetchResponse: (input: string) => Promise<void>;
  setResponses: React.Dispatch<React.SetStateAction<Response[]>>;
}

export const AIContext = createContext<AIContextType | undefined>(undefined);
