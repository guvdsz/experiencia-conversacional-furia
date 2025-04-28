import { Bot, User } from "lucide-react";
import { motion } from "motion/react";

export default function ChatMessage({
  message,
  time,
  role,
}: {
  message: string;
  time: string;
  role: string;
}) {
  const isUser = role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`w-full gap-3 ${
        isUser ? "flex-row-reverse" : "flex-row"
      } flex`}
    >
      <div className="w-10 h-10 min-w-10 p-1 rounded-full bg-furia-lightBlack flex items-center justify-center">
        {isUser ? (
          <User className="text-furia-white" />
        ) : (
          <Bot className="text-furia-white" />
        )}
      </div>

      <div
        className={
          "w-full sm:max-w-7/10 lg:max-w-1/2 p-4 rounded-2xl shadow-md bg-furia-lightBlack text-furia-white"
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
