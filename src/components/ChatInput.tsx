export default function ChatInput() {
  return (
    <div className="bg-furia-gray p-5 fixed bottom-0 left-0 right-0">
      <input
        type="text"
        placeholder="Digite sua mensagem..."
        className="w-full p-2 rounded-lg bg-furia-black text-furia-white border border-furia-gray focus:outline-none focus:ring-2 focus:ring-furia-blue"
      />
    </div>
  );
}
