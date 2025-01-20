import { Facebook, Instagram, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChatBot } from "@/components/ChatBot";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <div className="transform rotate-7 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://i.imgur.com/x3yfXh1.jpeg"
                alt="Grid of Sydney's Cakes"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          {/* Right side - Text and Button */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            <h1 className="font-seasons text-6xl md:text-7xl text-cake-rose mb-4">
              The Best
            </h1>
            <h2 className="font-seasons text-3xl md:text-4xl text-cake-rose mb-8">
              for your big day
            </h2>
            <Link to="/customize">
              <Button
                size="lg"
                className="bg-cake-rose hover:bg-cake-rose/90 text-white font-montserrat px-8 py-6 text-xl rounded-full"
              >
                order now!
              </Button>
            </Link>
            
            <div className="mt-8 text-cake-rose">
              <p className="font-montserrat">
                <a href="tel:+19296986795" className="hover:underline">(929) 698 6795</a>
              </p>
              <p className="font-montserrat">Albany, NY</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mt-12">
          <a
            href="https://instagram.com/_sydneyscakes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cake-rose hover:text-cake-rose/80 transition-colors"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://m.facebook.com/sydneylovestoparty/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cake-rose hover:text-cake-rose/80 transition-colors"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://wa.me/19296986795"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cake-rose hover:text-cake-rose/80 transition-colors"
          >
            <MessageCircle size={32} />
          </a>
          <a
            href="tel:+19296986795"
            className="text-cake-rose hover:text-cake-rose/80 transition-colors"
          >
            <PhoneCall size={32} />
          </a>
        </div>
      </div>

      <ChatBot />
    </div>
  );
};

export default Home;