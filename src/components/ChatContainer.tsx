import ChatMessage from "./ChatMessage";

export default function ChatContainer() {
  return (
    <div className="flex flex-col flex-1 text-furia-white bg-gradient-to-t from-furia-black to-furia-gray overflow-y-auto">
      <div className="px-5 py-10 flex flex-col gap-5">
        <ChatMessage message="Olá, FURIA!" />
        <ChatMessage message="Olá, FURIA!" />
        <ChatMessage message="Olá, FURIA!" />
        <ChatMessage message="Olá, FURIA!" />
        <ChatMessage message="Olá, FURIA!" />
        <ChatMessage message="Olá, FURIA!" />
        <ChatMessage message="Olá, FURIA!" />
      </div>
    </div>
  );
}
