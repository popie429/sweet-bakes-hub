import { X } from "lucide-react";
import { Button } from "../ui/button";

interface ChatHeaderProps {
  onClose: () => void;
}

export const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="p-4 border-b flex justify-between items-center bg-cake-burgundy text-white rounded-t-lg">
      <h3 className="font-semibold">Chat with Sydney's Cakes</h3>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="hover:bg-cake-rose text-white"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};