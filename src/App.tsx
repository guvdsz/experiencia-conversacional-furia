import ChatContainer from "./components/ChatContainer";
import Header from "./components/Header";

function App() {
  return (
    <main className="h-screen flex flex-col bg-furia-black text-furia-white">
      <Header />
      <ChatContainer />
    </main>
  );
}

export default App;
