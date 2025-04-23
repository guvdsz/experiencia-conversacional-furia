import furiaLogo from "../assets/furiaLogo.webp";
import { Instagram, Twitch, Twitter } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-furia-black shadow-md">
      <div className="container mx-auto px-5 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <img src={furiaLogo} alt="FURIA Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-furia-white text-xl font-bold tracking-tight">
            FURIA <span className="text-furia-white">Chat</span>
          </h1>
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-furia-lightGray hover:text-furia-white transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-furia-lightGray hover:text-furia-white transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-furia-lightGray hover:text-furia-white transition-colors"
          >
            <Twitch className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
