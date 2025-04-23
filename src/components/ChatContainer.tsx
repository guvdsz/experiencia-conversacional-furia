import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

export default function ChatContainer() {
  return (
    <div className="flex flex-col flex-1 text-furia-white bg-gradient-to-t from-black to-furia-gray">
      <div className="flex-grow overflow-y-auto px-5 py-10">
        <ChatMessage message="Olá, FURIA!" />
      </div>
      <ChatInput />
    </div>
  );
}
