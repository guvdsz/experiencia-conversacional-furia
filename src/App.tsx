import ChatContainer from "./components/ChatContainer";
import ChatInput from "./components/ChatInput";
import Header from "./components/Header";
import { AIProvider } from "./context/AiProvider";

function App() {
  return (
    <AIProvider>
      <main className="h-screen flex flex-col bg-furia-black text-furia-white relative">
        <Header />
        <ChatContainer />
        <ChatInput />
      </main>
    </AIProvider>
  );
}

export default App;
