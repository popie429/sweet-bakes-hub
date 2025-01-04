import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  isLoading: boolean;
}

export const ChatInput = ({ input, setInput, handleSend, isLoading }: ChatInputProps) => {
  return (
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
  );
};