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
        content: "Hi! I'm Sydney's Cakes AI assistant. I can help you with cake prices, availability, and any other questions you might have. How can I assist you today?"
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
    content: `You are a helpful assistant for Sydney's Cakes bakery. Here's what you know:
      - We offer custom cakes with various prices:
        * Piglet Cake ($160, serves 20-30 guests)
        * Don Julio Cake ($140, serves 12-25 guests)
        * Macaroon Cake ($80, serves 7-12 guests)
        * Vintage Two-Tier Cake ($210, serves 30-40 guests)
        * Sun & Moon Cake ($120, serves 7-13 guests)
      - We require at least 48 hours notice for all orders
      - We are located in Albany, NY
      - We operate by appointment only
      - We require a 50% deposit to secure orders
      Please provide accurate information based on these details.`
  };

  // Create a properly alternating message array
  const apiMessages: (SystemMessage | ChatMessage)[] = [systemMessage];
  
  // Filter out system messages and get chat messages
  const chatMessages = messages.filter(msg => msg.role !== 'system');
  
  // Skip the initial greeting message if it exists
  const startIndex = chatMessages[0]?.role === 'assistant' ? 1 : 0;
  
  // Add messages ensuring alternation
  for (let i = startIndex; i < chatMessages.length; i++) {
    const currentMsg = chatMessages[i];
    // Only add the message if it maintains the alternation pattern
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

  // Ensure the last message is from the user
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