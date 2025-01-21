import { ChatBot } from "@/components/ChatBot";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialLinks } from "@/components/home/SocialLinks";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden bg-white flex flex-col">
      <HeroSection />
      <div className="absolute bottom-0 left-0 right-0 w-full mb-8">
        <SocialLinks />
      </div>
      <ChatBot />
    </div>
  );
};

export default Home;