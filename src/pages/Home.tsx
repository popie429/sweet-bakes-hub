import { ChatBot } from "@/components/ChatBot";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialLinks } from "@/components/home/SocialLinks";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <HeroSection />
      <div className="flex-grow" />
      <div className="w-full max-w-[480px]">
        <SocialLinks />
      </div>
      <ChatBot />
    </div>
  );
};

export default Home;