import { Facebook, Instagram, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChatBot } from "@/components/ChatBot";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const cakeImages = [
    "https://i.imgur.com/tsM6cYx.jpeg",
    "https://i.imgur.com/1IlLFO1.jpeg",
    "https://i.imgur.com/Ve6bqSL.jpeg",
    "https://i.imgur.com/xjzX5Ep.jpeg",
    "https://i.imgur.com/anLj4Uc.jpeg",
    "https://i.imgur.com/9ICEHj0.jpeg",
    "https://i.imgur.com/tsM6cYx.jpeg",
    "https://i.imgur.com/1IlLFO1.jpeg"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="flex flex-col items-center text-center mb-12">
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

        {/* Cake Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {cakeImages.map((image, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`Cake ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
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