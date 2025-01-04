import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const cakes = [
  {
    id: 1,
    name: "Piglet Cake",
    price: 65,
    image: "https://i.imgur.com/KzqESzH.jpg",
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
    price: 75,
    image: "https://i.imgur.com/vhGv5tS.jpg",
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
    price: 85,
    image: "https://i.imgur.com/QEp7PFw.jpg",
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
    price: 95,
    image: "https://i.imgur.com/QXBtWd3.jpg",
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
    price: 70,
    image: "https://i.imgur.com/UBp4tDG.jpg",
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
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600 mb-2">{cake.description}</p>
              <p className="text-cake-burgundy font-semibold">Starting at ${cake.price}</p>
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