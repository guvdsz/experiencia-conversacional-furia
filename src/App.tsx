import ChatContainer from "./components/ChatContainer";
import ChatInput from "./components/ChatInput";
import Header from "./components/Header";

function App() {
  return (
    <main className="h-screen flex flex-col bg-furia-black text-furia-white">
      <Header />
      <ChatContainer />
      <ChatInput />
    </main>
  );
}

export default App;
