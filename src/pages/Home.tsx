import { ChatBot } from "@/components/ChatBot";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialLinks } from "@/components/home/SocialLinks";

const Home = () => {
  return (
    <div className="min-h-screen h-screen overflow-hidden bg-white flex flex-col relative">
      <HeroSection />
      <div className="fixed bottom-8 left-0 right-0 w-full z-50">
        <SocialLinks />
      </div>
      <ChatBot />
    </div>
  );
};

export default Home;