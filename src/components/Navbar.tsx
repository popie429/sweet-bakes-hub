import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.imgur.com/9ICEHj0.jpeg" 
              alt="Sydney's Cakes Logo" 
              className="h-16 object-contain"
            />
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="font-inter text-gray-600 hover:text-cake-rose transition-colors">
              Home
            </Link>
            <Link to="/gallery" className="font-inter text-gray-600 hover:text-cake-rose transition-colors">
              Gallery
            </Link>
            <Link to="/customize" className="font-inter text-gray-600 hover:text-cake-rose transition-colors">
              Customize
            </Link>
            <Link to="/calendar" className="font-inter text-gray-600 hover:text-cake-rose transition-colors">
              Calendar
            </Link>
            <Link to="/faq" className="font-inter text-gray-600 hover:text-cake-rose transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};