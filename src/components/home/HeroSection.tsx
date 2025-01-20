import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16 bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <div className="flex flex-col items-center justify-center max-w-[480px] mx-auto">
            <div className="relative w-full flex justify-center translate-y-12">
              <img
                src="https://i.imgur.com/kzn29W4.png"
                alt="Decorative cake logo"
                className="w-72 md:w-96 h-auto"
                style={{ 
                  backgroundColor: 'transparent',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)'
                }}
              />
            </div>
            <h1 className="font-seasons text-6xl md:text-7xl text-cake-rose">
              Custom
            </h1>
            <h1 className="font-seasons text-6xl md:text-7xl text-cake-rose -mt-2">
              Birthday
            </h1>
            <h1 className="font-seasons text-6xl md:text-7xl text-cake-rose -mt-2 mb-4">
              Cake
            </h1>
            <h2 className="font-seasons text-2xl text-cake-rose mb-8">
              the best on your special day
            </h2>
            <div className="mb-8">
              <Link to="/customize">
                <Button
                  size="lg"
                  className="bg-[#B25B3E] hover:bg-[#B25B3E]/90 text-white font-seasons px-8 py-6 text-xl rounded-full"
                >
                  order now!
                </Button>
              </Link>
            </div>
            
            <div className="text-[#B25B3E]">
              <p className="font-seasons text-xl">
                <a href="tel:+19296986795" className="hover:underline">(929) 698 6795</a>
              </p>
              <p className="font-seasons text-xl">Albany, NY</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center md:absolute md:right-[-20%] md:h-screen overflow-hidden">
          <img
            src="https://i.postimg.cc/6pM9BkQZ/Untitled-design-3.png"
            alt="Grid of Sydney's Cakes"
            className="w-[160%] md:w-[180%] h-[130vh] object-cover max-w-none transform translate-x-[25%]"
            style={{ 
              backgroundColor: 'transparent',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0) translateX(25%)',
              WebkitTransform: 'translateZ(0) translateX(25%)',
              objectPosition: 'center right'
            }}
          />
        </div>
      </div>
    </div>
  );
};