import { Instagram, Twitch, Twitter } from "lucide-react";
import furiaLogo from "../assets/furiaLogo.webp";
export default function Footer() {
  return (
    <footer className="bg-furia-black text-furia-white py-5 px-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src={furiaLogo}
          alt="FURIA Logo"
          className="h-10 w-10"
        ></img>
        <span className="font-bold text-lg">FURIA</span>
      </div>

      <div className="flex gap-6">
        <a
          href="#"
          className="text-gray-400 hover:text-furia-white transition-colors"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-furia-white transition-colors"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="text-furia-white opacity-50 hover:text-furia-white transition-colors"
        >
          <Twitch className="h-5 w-5" />
        </a>
      </div>

      <div className="text-sm text-furia-white opacity-75">
        Desenvolvido por Gustavo Viana de Souza para FURIA Tech
      </div>
    </footer>
  );
}
