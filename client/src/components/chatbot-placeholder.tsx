import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/hooks/use-language";

export function ChatbotPlaceholder() {
  const { t } = useLanguage();

const handleChatbotClick = () => {
  window.open('/ai-chat.html', '_blank');
};

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-32 right-4 z-50"
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="lg"
            onClick={handleChatbotClick}
            className="w-16 h-16 bg-college-red hover:bg-college-red-light text-white rounded-full shadow-lg hover-lift"
          >
            <Bot className="text-xl" size={24} />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{t("tooltip.chatbot")}</p>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
}
