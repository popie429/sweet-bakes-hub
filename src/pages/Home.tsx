import { ChatBot } from "@/components/ChatBot";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialLinks } from "@/components/home/SocialLinks";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden bg-white flex flex-col relative">
      <HeroSection />
      <div className="absolute bottom-0 left-0 md:left-[25%] w-full max-w-[480px] mb-16">
        <SocialLinks />
      </div>
      <ChatBot />
    </div>
  );
};

export default Home;