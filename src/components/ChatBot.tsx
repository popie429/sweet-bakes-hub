import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Messages } from './chat/Messages';
import { ChatInput } from './chat/ChatInput';
import { ChatHeader } from './chat/ChatHeader';

interface Message {
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
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY || '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'}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
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
            },
            ...messages,
            { role: 'user', content: userMessage }
          ],
          temperature: 0.2,
          max_tokens: 1000
        }),
      });

      const data = await response.json();
      if (data.choices && data.choices[0]?.message?.content) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.choices[0].message.content }]);
      }
    } catch (error) {
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