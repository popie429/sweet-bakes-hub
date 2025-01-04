import { Link } from "react-router-dom";
import { Share2 } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const handleShare = () => {
    // This opens Lovable's built-in share dialog
    window.parent.postMessage({ type: 'OPEN_SHARE_DIALOG' }, '*');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.imgur.com/9ICEHj0.jpeg" 
              alt="Sydney's Cakes Logo" 
              className="h-16 object-contain"
            />
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="font-inter text-gray-600 hover:text-cake-burgundy transition-colors">
              Home
            </Link>
            <Link to="/gallery" className="font-inter text-gray-600 hover:text-cake-burgundy transition-colors">
              Gallery
            </Link>
            <Link to="/customize" className="font-inter text-gray-600 hover:text-cake-burgundy transition-colors">
              Customize
            </Link>
            <Link to="/calendar" className="font-inter text-gray-600 hover:text-cake-burgundy transition-colors">
              Calendar
            </Link>
            <Link to="/faq" className="font-inter text-gray-600 hover:text-cake-burgundy transition-colors">
              FAQ
            </Link>
            <Button 
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex items-center gap-2"
            >
              <Share2 className="h-4 w-4" /> Share
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};