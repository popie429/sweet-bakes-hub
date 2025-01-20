import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from "./LanguageSelector";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center ml-8">
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.imgur.com/9ICEHj0.jpeg" 
              alt="Sydney's Cakes Logo" 
              className="h-16 object-contain"
            />
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="font-seasons text-lg text-gray-600 hover:text-[#D44199] transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/gallery" className="font-seasons text-lg text-gray-600 hover:text-[#D44199] transition-colors">
              {t('nav.gallery')}
            </Link>
            <Link to="/customize" className="font-seasons text-lg text-gray-600 hover:text-[#D44199] transition-colors">
              {t('nav.customize')}
            </Link>
            <Link to="/calendar" className="font-seasons text-lg text-gray-600 hover:text-[#D44199] transition-colors">
              {t('nav.calendar')}
            </Link>
            <Link to="/faq" className="font-seasons text-lg text-gray-600 hover:text-[#D44199] transition-colors">
              {t('nav.faq')}
            </Link>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};