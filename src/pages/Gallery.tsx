import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const cakes = [
  {
    id: 1,
    name: "Piglet Cake",
    price: 160,
    servings: "20-30",
    image: "https://i.imgur.com/tsM6cYx.jpeg",
    description: "Adorable Piglet themed cake with fondant details",
    presets: {
      flourType: "vanilla",
      filling: "vanilla",
      frosting: "fondant",
      decorations: ["fondant-piglet", "fondant-flowers"],
      cakeTopper: ""
    }
  },
  {
    id: 2,
    name: "Don Julio Cake",
    price: 140,
    servings: "12-25",
    image: "https://i.imgur.com/1IlLFO1.jpeg",
    description: "Elegant Don Julio themed celebration cake",
    presets: {
      flourType: "chocolate",
      filling: "chocolate",
      frosting: "fondant",
      decorations: ["fondant-bottle", "gold-details"],
      cakeTopper: ""
    }
  },
  {
    id: 3,
    name: "Macaroon Cake",
    price: 80,
    servings: "7-12",
    image: "https://i.imgur.com/Ve6bqSL.jpeg",
    description: "Delicate cake decorated with fresh macaroons",
    presets: {
      flourType: "vanilla",
      filling: "vanilla",
      frosting: "buttercream",
      decorations: ["macaroons", "flowers"],
      cakeTopper: ""
    }
  },
  {
    id: 4,
    name: "Vintage Two-Tier Cake",
    price: 210,
    servings: "30-40",
    image: "https://i.imgur.com/xjzX5Ep.jpeg",
    description: "Elegant two-tiered vintage style cake",
    presets: {
      flourType: "vanilla",
      filling: "vanilla",
      frosting: "buttercream",
      decorations: ["roses", "pearls"],
      cakeTopper: ""
    }
  },
  {
    id: 5,
    name: "Sun & Moon Cake",
    price: 120,
    servings: "7-13",
    image: "https://i.imgur.com/anLj4Uc.jpeg",
    description: "Celestial themed cake with sun and moon details",
    presets: {
      flourType: "chocolate",
      filling: "chocolate",
      frosting: "fondant",
      decorations: ["sun-moon", "stars"],
      cakeTopper: ""
    }
  },
];

const Gallery = () => {
  const navigate = useNavigate();

  const handleOrderClick = (cake: typeof cakes[0]) => {
    navigate('/customization', { state: { selectedCake: cake } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair font-bold text-cake-burgundy mb-8 text-center">
        Our Cake Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cakes.map((cake) => (
          <Card key={cake.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="font-playfair text-xl">{cake.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 mb-4"> {/* Increased height from h-48 to h-64 */}
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full rounded-md object-contain" /* Changed from object-cover to object-contain */
                />
              </div>
              <p className="text-gray-600 mb-2">{cake.description}</p>
              <p className="text-cake-burgundy font-semibold mb-1">${cake.price}</p>
              <p className="text-gray-600 text-sm">Serves {cake.servings} guests</p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-cake-burgundy hover:bg-cake-rose text-white"
                onClick={() => handleOrderClick(cake)}
              >
                Place Order
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;