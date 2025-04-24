import { Bot } from "lucide-react";
import { motion } from "motion/react";

export default function ChatMessage({ message, time }: { message: string, time: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-fit flex gap-3 items"
    >
      <div className="w-10 h-10 p-1 rounded-full bg-furia-lightBlack flex items-center justify-center">
        <Bot className="text-furia-white" />
      </div>

      <div
        className={
          "group relative max-w-[80%] md:max-w-[70%] px-4 py-3 rounded-2xl shadow-md bg-furia-lightBlack text-furia-white"
        }
      >
        <p className="text-sm md:text-base">{message}</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={
            "text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-furia-white/70"
          }
        >
          <span>{time}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
