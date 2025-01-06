import { useState, useEffect } from 'react';
import { useToast } from './use-toast';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface SystemMessage {
  role: 'system';
  content: string;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! I'm Sydney's Cakes AI assistant. How can I help you today?"
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

const sendChatMessage = async (userMessage: string, messages: Message[]): Promise<string> => {
  const systemMessage: SystemMessage = {
    role: 'system',
    content: `You are a concise assistant for Sydney's Cakes bakery. Provide direct, brief answers to questions without additional context unless specifically asked. Here's what you know:
      - Piglet Cake ($160)
      - Don Julio Cake ($140)
      - Macaroon Cake ($80)
      - Vintage Two-Tier Cake ($210)
      - Sun & Moon Cake ($120)
      Only provide information that directly answers the user's question.`
  };

  const apiMessages: (SystemMessage | ChatMessage)[] = [systemMessage];
  
  const chatMessages = messages.filter(msg => msg.role !== 'system');
  
  const startIndex = chatMessages[0]?.role === 'assistant' ? 1 : 0;
  
  for (let i = startIndex; i < chatMessages.length; i++) {
    const currentMsg = chatMessages[i];
    if (i === startIndex || 
        (apiMessages[apiMessages.length - 1].role === 'system' && currentMsg.role === 'user') ||
        (apiMessages[apiMessages.length - 1].role === 'user' && currentMsg.role === 'assistant') ||
        (apiMessages[apiMessages.length - 1].role === 'assistant' && currentMsg.role === 'user')) {
      apiMessages.push({
        role: currentMsg.role as 'user' | 'assistant',
        content: currentMsg.content
      });
    }
  }

  if (apiMessages[apiMessages.length - 1].role !== 'user') {
    apiMessages.push({ role: 'user', content: userMessage });
  }

  const response = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer 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',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama-3.1-sonar-small-128k-online',
      messages: apiMessages,
      temperature: 0.2,
      max_tokens: 1000
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('API Error:', errorData);
    throw new Error(errorData.error?.message || 'Failed to get response from AI');
  }

  const data = await response.json();
  
  if (data.choices && data.choices[0]?.message?.content) {
    return data.choices[0].message.content;
  }
  
  throw new Error('Invalid response format from AI');
};