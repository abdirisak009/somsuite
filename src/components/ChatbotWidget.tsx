import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatbotWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        size="lg"
        className="rounded-full w-16 h-16 bg-accent hover:bg-accent-hover shadow-2xl group"
        title="Chat with us"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  );
};

export default ChatbotWidget;
