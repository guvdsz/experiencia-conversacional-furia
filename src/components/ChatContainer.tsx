import ChatMessage from "./ChatMessage";

export default function ChatContainer() {
  return (
    <div className="flex flex-col flex-1 text-furia-white bg-gradient-to-t from-furia-black to-furia-gray overflow-y-auto">
      <div className="px-5 py-10 flex flex-col gap-10">
        <ChatMessage message="FALA, PANTERA! 😎 Bem-vindo ao FURIA Chat o lugar certo para descobrir sobre o melhor time de CS com a gente!" time={"Agora"}/>
        <ChatMessage message="Quer saber do próximo jogo da FURIA, um fato irado sobre o FalleN, ou testar seus conhecimentos num quiz? 😜 Manda sua pergunta!" time={"Agora"}/>
      </div>
    </div>
  );
}
