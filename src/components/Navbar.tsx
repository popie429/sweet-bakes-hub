import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from "./LanguageSelector";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="absolute top-0 w-full z-10">
      <div className="container mx-auto">
        <div className="flex items-center ml-8 h-24">
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.imgur.com/9ICEHj0.jpeg" 
              alt="Sydney's Cakes Logo" 
              className="h-16 object-contain"
            />
          </Link>
          <div className="flex items-center space-x-6 ml-8">
            <Link to="/" className="font-seasons text-lg text-[#D44199] hover:text-[#D44199] transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/gallery" className="font-seasons text-lg text-[#D44199] hover:text-[#D44199] transition-colors">
              {t('nav.gallery')}
            </Link>
            <Link to="/calendar" className="font-seasons text-lg text-[#D44199] hover:text-[#D44199] transition-colors">
              {t('nav.calendar')}
            </Link>
            <Link to="/faq" className="font-seasons text-lg text-[#D44199] hover:text-[#D44199] transition-colors">
              {t('nav.faq')}
            </Link>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};