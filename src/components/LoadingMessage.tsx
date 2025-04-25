import { Bot } from "lucide-react";
import { motion } from "motion/react";

export default function LoadingMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex gap-3 items-center"
    >
      <div className="w-10 h-10 p-1 rounded-full bg-furia-lightBlack flex items-center justify-center">
        <Bot className="text-furia-white" />
      </div>

      <p className="animate-pulse">Pensando...</p>
    </motion.div>
  );
}
