import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Messages } from './chat/Messages';
import { ChatInput } from './chat/ChatInput';
import { ChatHeader } from './chat/ChatHeader';
import { useChat } from '@/hooks/useChat';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, setInput, isLoading, handleSend } = useChat();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 bg-cake-burgundy hover:bg-cake-rose shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80 md:w-96">
          <ChatHeader onClose={() => setIsOpen(false)} />
          <Messages messages={messages} isLoading={isLoading} />
          <ChatInput
            input={input}
            setInput={setInput}
            handleSend={handleSend}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};