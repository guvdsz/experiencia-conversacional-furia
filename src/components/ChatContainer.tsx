import { useEffect, useRef } from "react";
import { useAI } from "../hooks/useAi";
import ChatMessage from "./ChatMessage";

export default function ChatContainer() {
  const { responses } = useAI();
  const messages = responses.map((message, index) => (
    <ChatMessage key={index} message={message} time={"Agora"} />
  ));
  const chatWindowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTo({
        top: chatWindowRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex flex-col flex-1 text-furia-white bg-gradient-to-t from-furia-black to-furia-gray overflow-y-auto" ref={chatWindowRef}>
      <div className="px-5 py-10 flex flex-col gap-10">
        <ChatMessage message="FALA, PANTERA! 😎 Bem-vindo ao FURIA Chat o lugar certo para descobrir sobre o melhor time de CS com a gente!" time={"Agora"}/>
        <ChatMessage message="Quer saber do próximo jogo da FURIA, um fato irado sobre o FalleN, ou testar seus conhecimentos num quiz? 😜 Manda sua pergunta!" time={"Agora"}/>
        {messages.length > 0 && messages}
      </div>
    </div>
  );
}
