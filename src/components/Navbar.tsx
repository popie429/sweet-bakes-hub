import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from "./LanguageSelector";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center ml-0 md:ml-8 h-24 px-4 md:px-0">
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.imgur.com/9ICEHj0.jpeg" 
              alt="Sydney's Cakes Logo" 
              className="h-12 md:h-16 object-contain"
              style={{
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)',
                WebkitAppearance: 'none'
              }}
            />
          </Link>
          <div className="flex items-center space-x-3 md:space-x-6 ml-4 md:ml-8 overflow-x-auto no-scrollbar">
            <Link to="/" className="font-seasons text-base md:text-lg text-[#D44199] hover:text-[#D44199] transition-colors whitespace-nowrap">
              {t('nav.home')}
            </Link>
            <Link to="/gallery" className="font-seasons text-base md:text-lg text-[#D44199] hover:text-[#D44199] transition-colors whitespace-nowrap">
              {t('nav.gallery')}
            </Link>
            <Link to="/calendar" className="font-seasons text-base md:text-lg text-[#D44199] hover:text-[#D44199] transition-colors whitespace-nowrap">
              {t('nav.calendar')}
            </Link>
            <Link to="/faq" className="font-seasons text-base md:text-lg text-[#D44199] hover:text-[#D44199] transition-colors whitespace-nowrap">
              {t('nav.faq')}
            </Link>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};