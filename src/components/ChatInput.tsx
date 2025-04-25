import { ArrowUp, LoaderCircle } from "lucide-react";
import { useAI } from "../hooks/useAi";

export default function ChatInput() {
  const { fetchResponse, loading, setResponses } = useAI();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const message = formData.get("message");
      if (!message) return;
      setResponses((prevResponses) => [
        ...prevResponses,
        { text: message as string, role: "user" },
      ]);
      fetchResponse(message as string);
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
    } finally {
      event.currentTarget.reset();
    }
  };

  return (
    <div className="bg-transparent px-5 pb-5">
      <form className="flex gap-3" onSubmit={handleSubmit}>
        <textarea
          placeholder="Faça alguma pergunta..."
          name="message"
          disabled={loading}
          className={`w-full h-25 p-5 rounded-lg bg-furia-black text-furia-white border border-furia-white/50 outline-none focus:border-furia-white transition-colors resize-none ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              (
                event.currentTarget.closest("form") as HTMLFormElement
              )?.requestSubmit();
            }
          }}
        />
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className={`bg-furia-white rounded-lg text-furia-black hover:bg-furia-lightGray transition-colors cursor-pointer w-10 flex-1 flex items-center justify-center ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? (
              <LoaderCircle className="animate-spin h-5 w-5 text-furia-black" />
            ) : (
              <ArrowUp className="h-5 w-5" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
