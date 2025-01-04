import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Messages } from './chat/Messages';
import { ChatInput } from './chat/ChatInput';
import { ChatHeader } from './chat/ChatHeader';

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

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
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

      // Get conversation history without system messages
      const conversationHistory = messages.filter(msg => msg.role !== 'system');
      
      // Initialize API messages array with system message
      const apiMessages: (SystemMessage | ChatMessage)[] = [systemMessage];
      
      // Add conversation history maintaining alternation
      let lastRole: 'user' | 'assistant' | null = null;
      
      for (const msg of conversationHistory) {
        if (msg.role !== 'system' && (!lastRole || msg.role !== lastRole)) {
          apiMessages.push({ role: msg.role, content: msg.content });
          lastRole = msg.role;
        }
      }
      
      // Add the new user message if it doesn't break alternation
      if (lastRole !== 'user') {
        apiMessages.push({ role: 'user' as const, content: userMessage });
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
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.choices[0].message.content 
        }]);
      } else {
        throw new Error('Invalid response format from AI');
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