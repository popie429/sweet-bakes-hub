import { ChatBot } from "@/components/ChatBot";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialLinks } from "@/components/home/SocialLinks";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Add homepage-layout class when component mounts
    document.documentElement.classList.add('homepage-layout');
    document.body.classList.add('homepage-layout');

    // Remove homepage-layout class when component unmounts
    return () => {
      document.documentElement.classList.remove('homepage-layout');
      document.body.classList.remove('homepage-layout');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <HeroSection />
      <SocialLinks />
      <ChatBot />
    </div>
  );
};

export default Home;