import furiaLogo from "../assets/furiaLogo.webp";
import { Instagram, ShoppingBag, Twitch, Twitter } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-furia-black shadow-md flex items-center justify-between p-5">
      <div className="flex items-center gap-2">
        <img src={furiaLogo} alt="FURIA Logo" className="h-10 w-10" />
        <h1 className="text-furia-white text-xl font-bold tracking-tight">
          FURIA <span className="text-furia-white">Chat</span>
        </h1>
      </div>
      <div className="flex gap-6">
        <a
          href="https://www.furia.gg/"
          target="_blank"
          className="text-furia-lightGray hover:text-furia-white transition-colors"
        >
          <ShoppingBag className="h-5 w-5" />
        </a>
        <a
          href="https://x.com/FURIA"
          target="_blank"
          className="text-furia-lightGray hover:text-furia-white transition-colors"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href="https://www.instagram.com/furiagg/"
          target="_blank"
          className="text-furia-lightGray hover:text-furia-white transition-colors"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="https://www.twitch.tv/furiatv"
          target="_blank"
          className="text-furia-lightGray hover:text-furia-white transition-colors"
        >
          <Twitch className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}
