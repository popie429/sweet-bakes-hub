import { ScrollArea } from "../ui/scroll-area";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface MessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export const Messages = ({ messages, isLoading }: MessagesProps) => {
  return (
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
  );
};