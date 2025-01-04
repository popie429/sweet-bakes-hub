import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { useToast } from './ui/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Add initial greeting message
    setMessages([
      {
        role: 'assistant',
        content: "Hi! I'm Sydney's Cakes AI assistant. I can help you with cake prices, availability, and any other questions you might have. How can I assist you today?"
      }
    ]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Perplexity API key to use the chat feature.",
        variant: "destructive"
      });
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
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
          <div className="p-4 border-b flex justify-between items-center bg-cake-burgundy text-white rounded-t-lg">
            <h3 className="font-semibold">Chat with Sydney's Cakes</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-cake-rose text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {!apiKey && (
            <div className="p-4 border-b">
              <Input
                type="password"
                placeholder="Enter Perplexity API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full"
              />
            </div>
          )}

          <ScrollArea className="h-96 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-cake-burgundy text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                    Typing...
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-cake-burgundy hover:bg-cake-rose"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};