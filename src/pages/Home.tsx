import { ChatBot } from "@/components/ChatBot";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialLinks } from "@/components/home/SocialLinks";

const Home = () => {
  return (
    <div className="min-h-screen h-screen overflow-hidden bg-white flex flex-col relative">
      <HeroSection />
      <div className="absolute bottom-0 left-0 right-0 w-full mb-8 z-10">
        <SocialLinks />
      </div>
      <ChatBot />
    </div>
  );
};

export default Home;