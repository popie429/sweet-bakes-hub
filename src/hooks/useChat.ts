import { useState, useEffect } from 'react';
import { useToast } from './use-toast';
import { Message } from '@/types/chat';
import { sendChatMessage } from '@/services/chatService';
import { INITIAL_GREETING } from '@/config/chatConfig';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: INITIAL_GREETING
      }
    ]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await sendChatMessage(userMessage, messages);
      if (response) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: response 
        }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    handleSend
  };
};