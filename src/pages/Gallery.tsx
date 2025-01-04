import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const cakes = [
  {
    id: 1,
    name: "Classic Vanilla Birthday",
    price: 45,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Light and fluffy vanilla cake with buttercream frosting",
    presets: {
      flourType: "vanilla",
      filling: "vanilla",
      frosting: "buttercream",
      decorations: ["stars"],
      cakeTopper: "happybirthday"
    }
  },
  {
    id: 2,
    name: "Chocolate Dream",
    price: 50,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Rich chocolate cake with ganache filling",
    presets: {
      flourType: "chocolate",
      filling: "chocolate",
      frosting: "buttercream",
      decorations: ["sprinkles"],
      cakeTopper: ""
    }
  },
  {
    id: 3,
    name: "Red Velvet Celebration",
    price: 55,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Classic red velvet with cream cheese frosting",
    presets: {
      flourType: "redVelvet",
      filling: "vanilla",
      frosting: "cream-cheese",
      decorations: ["hearts"],
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