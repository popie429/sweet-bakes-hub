import { ChatBot } from "@/components/ChatBot";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialLinks } from "@/components/home/SocialLinks";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <HeroSection />
      <div className="flex-grow" />
      <SocialLinks />
      <ChatBot />
    </div>
  );
};

export default Home;