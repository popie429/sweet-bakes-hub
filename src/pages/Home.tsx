import { ChatBot } from "@/components/ChatBot";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialLinks } from "@/components/home/SocialLinks";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <HeroSection />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] mb-16">
        <SocialLinks />
      </div>
      <ChatBot />
    </div>
  );
};

export default Home;