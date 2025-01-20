import { ChatBot } from "@/components/ChatBot";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialLinks } from "@/components/home/SocialLinks";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden bg-white">
      <HeroSection />
      <SocialLinks />
      <ChatBot />
    </div>
  );
};

export default Home;