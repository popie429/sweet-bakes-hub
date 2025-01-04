import { Facebook, Instagram, PhoneCall, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex-1">
      <section className="relative h-[70vh] bg-cake-pink">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cake-burgundy mb-6">
              Delicious Custom Cakes for Your Special Moments
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Handcrafted with love, our cakes are perfect for any celebration.
            </p>
            <div className="space-x-4">
              <Button
                size="lg"
                className="bg-cake-burgundy hover:bg-cake-rose text-white"
                onClick={() => window.location.href = 'tel:+19296986795'}
              >
                <PhoneCall className="mr-2 h-4 w-4" /> Call Now
              </Button>
              <Link to="/calendar">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cake-burgundy text-cake-burgundy hover:bg-cake-burgundy hover:text-white"
                >
                  Make a Reservation
                </Button>
              </Link>
              <Link to="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cake-burgundy text-cake-burgundy hover:bg-cake-burgundy hover:text-white"
                >
                  Custom Cake Order
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/_sydneyscakes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cake-burgundy hover:text-cake-rose transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com/Sydneyscakes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cake-burgundy hover:text-cake-rose transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://wa.me/19296986795"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cake-burgundy hover:text-cake-rose transition-colors"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;