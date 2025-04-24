import { ArrowUp, X } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="bg-transparent px-5 pb-5">
      <form className="flex justify-center gap-3 ">
        <textarea
          placeholder="Faça alguma pergunta..."
          className="w-full h-25 p-5 rounded-lg bg-furia-black text-furia-white border border-furia-white/50 outline-none focus:border-furia-white transition-colors resize-none"
        />
        <div className="flex flex-col gap-1">
          <button
            type="submit"
            className="bg-furia-white rounded-lg text-furia-black hover:bg-furia-lightGray transition-colors cursor-pointer w-10 flex-1 flex items-center justify-center"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="bg-furia-white rounded-lg text-furia-black hover:bg-furia-lightGray transition-colors cursor-pointer w-10 flex-1 flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
