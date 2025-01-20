import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SocialLinks } from './SocialLinks';

export const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16 bg-white">
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
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="lovable-uploads/4c978480-815d-4d3f-b4dc-9e7d95562427.png"
            alt="Grid of Sydney's Cakes"
            className="w-[120%] md:w-[110%] h-auto object-contain max-w-none"
            style={{ 
              backgroundColor: 'transparent',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)'
            }}
          />
        </div>
      </div>
    </div>
  );
};