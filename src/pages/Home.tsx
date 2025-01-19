import { Facebook, Instagram, MessageCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChatBot } from "@/components/ChatBot";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Left side with text */}
        <div className="lg:w-1/2 space-y-6 text-left">
          <img 
            src="https://i.imgur.com/9ICEHj0.jpeg" 
            alt="Sydney's Cakes Logo" 
            className="w-48 h-auto mb-8"
          />
          <h1 className="font-seasons text-5xl md:text-6xl lg:text-7xl text-cake-rose mb-4">
            The Best
          </h1>
          <p className="font-seasons text-3xl md:text-4xl text-cake-rose mb-8">
            for your big day
          </p>
          <Link to="/customize">
            <Button 
              size="lg" 
              className="bg-cake-rose hover:bg-opacity-90 text-white px-8 py-6 rounded-full flex items-center space-x-2"
            >
              <span className="text-lg">order now!</span>
              <ShoppingBag className="ml-2" />
            </Button>
          </Link>
          <div className="mt-8 space-y-2 text-gray-600">
            <p className="flex items-center">
              <span className="text-cake-rose">•</span>
              <a href="tel:+19296986795" className="ml-2">(929) 698-6795</a>
            </p>
            <p className="flex items-center">
              <span className="text-cake-rose">•</span>
              <span className="ml-2">Albany, NY</span>
            </p>
          </div>
        </div>

        {/* Right side with cake grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 mt-8 lg:mt-0">
          <img src="/lovable-uploads/4ede857f-3f09-4c80-abd7-0b185c251061.png" alt="Cake Gallery" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Social Links Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/_sydneyscakes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cake-rose hover:text-opacity-80 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://m.facebook.com/sydneylovestoparty/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cake-rose hover:text-opacity-80 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://wa.me/19296986795"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cake-rose hover:text-opacity-80 transition-colors"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default Home;