import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start justify-between h-full">
        <div className="w-full md:w-1/2 flex flex-col items-center text-center pt-24 md:pt-0">
          <div className="flex flex-col items-center justify-center max-w-[480px] mx-auto px-4 md:px-0">
            <div className="relative w-full flex justify-center translate-y-12">
              <img
                src="https://i.imgur.com/kzn29W4.png"
                alt="Decorative cake logo"
                className="w-48 md:w-72 lg:w-96 h-auto"
                style={{ 
                  backgroundColor: 'transparent',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)',
                  maxWidth: '100%'
                }}
              />
            </div>
            <h1 className="font-seasons text-4xl md:text-6xl lg:text-7xl text-cake-rose mt-4">
              The Best
            </h1>
            <h2 className="font-seasons text-2xl md:text-3xl lg:text-4xl text-cake-rose mb-3">
              for your big day
            </h2>
            <div className="my-3">
              <Link to="/customize">
                <Button
                  size="lg"
                  className="bg-cake-rose hover:bg-cake-rose/90 text-white font-seasons px-6 md:px-8 py-4 md:py-6 text-lg md:text-xl rounded-full"
                >
                  order now!
                </Button>
              </Link>
            </div>
            
            <div className="mt-3 text-cake-rose">
              <p className="font-seasons text-lg md:text-xl">
                <a href="tel:+19296986795" className="hover:underline">(929) 698 6795</a>
              </p>
              <p className="font-seasons text-lg md:text-xl">Albany, NY</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full mt-8 md:mt-0">
          <img
            src="https://i.imgur.com/WOPaaFE.png"
            alt="Grid of Sydney's Cakes"
            className="h-full w-auto max-w-none object-contain absolute right-0 top-0 md:top-0"
            style={{ 
              objectPosition: 'right top',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)',
              maxHeight: '100vh'
            }}
          />
        </div>
      </div>
    </div>
  );
};