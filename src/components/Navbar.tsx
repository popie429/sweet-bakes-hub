import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-playfair font-bold text-cake-burgundy">
            Sydney's Cakes
          </Link>
          <div className="space-x-6">
            <Link to="/" className="font-inter text-gray-600 hover:text-cake-burgundy transition-colors">
              Home
            </Link>
            <Link to="/gallery" className="font-inter text-gray-600 hover:text-cake-burgundy transition-colors">
              Gallery
            </Link>
            <Link to="/calendar" className="font-inter text-gray-600 hover:text-cake-burgundy transition-colors">
              Calendar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};