import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <div className="relative h-screen mx-auto px-4 pt-8 pb-16 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-center text-center z-10">
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
              The Best
            </h1>
            <h2 className="font-seasons text-3xl md:text-4xl text-cake-rose mb-3">
              for your big day
            </h2>
            <div className="my-3">
              <Link to="/customize">
                <Button
                  size="lg"
                  className="bg-cake-rose hover:bg-cake-rose/90 text-white font-seasons px-8 py-6 text-xl rounded-full"
                >
                  order now!
                </Button>
              </Link>
            </div>
            
            <div className="mt-3 text-cake-rose">
              <p className="font-seasons text-xl">
                <a href="tel:+19296986795" className="hover:underline">(929) 698 6795</a>
              </p>
              <p className="font-seasons text-xl">Albany, NY</p>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 w-full md:w-[75%] h-[120vh] overflow-hidden" style={{ transform: 'translateY(-10%)' }}>
          <img
            src="https://i.postimg.cc/6pM9BkQZ/Untitled-design-3.png"
            alt="Grid of Sydney's Cakes"
            className="w-[180%] md:w-[200%] h-[140vh] object-cover max-w-none"
            style={{ 
              backgroundColor: 'transparent',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateX(10%)',
              WebkitTransform: 'translateX(10%)',
              objectPosition: 'center right'
            }}
          />
        </div>
      </div>
    </div>
  );
};