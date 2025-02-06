import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="left-section">
          <div className="content-wrapper">
            <div className="relative w-full flex justify-center">
              <img
                src="https://i.imgur.com/kzn29W4.png"
                alt="Decorative cake logo"
                className="w-32 md:w-48 lg:w-64 h-auto"
                style={{ 
                  backgroundColor: 'transparent',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)'
                }}
              />
            </div>
            <h1 className="hero-title">
              The Best
            </h1>
            <h2 className="hero-subtitle">
              for your big day
            </h2>
            <Link to="/customize">
              <Button className="hero-button">
                order now!
              </Button>
            </Link>
            
            <div className="flex flex-col items-center space-y-1">
              <a href="tel:+19296986795" className="hero-contact hover:underline">
                (929) 698 6795
              </a>
              <p className="hero-contact">
                Albany, NY
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full fixed md:relative right-0 top-0 -z-10 md:z-0">
          <img
            src="https://i.imgur.com/WOPaaFE.png"
            alt="Grid of Sydney's Cakes"
            className="right-image"
            style={{ 
              objectPosition: 'right top',
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