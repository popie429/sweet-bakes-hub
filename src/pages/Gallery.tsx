import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const cakes = [
    {
      id: 1,
      name: t('gallery.cakes.piglet.name'),
      price: 160,
      servings: t('gallery.cakes.piglet.servings'),
      image: "https://i.imgur.com/tsM6cYx.jpeg",
      description: t('gallery.cakes.piglet.description'),
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
      name: t('gallery.cakes.donJulio.name'),
      price: 140,
      servings: t('gallery.cakes.donJulio.servings'),
      image: "https://i.imgur.com/1IlLFO1.jpeg",
      description: t('gallery.cakes.donJulio.description'),
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
      name: t('gallery.cakes.macaroon.name'),
      price: 80,
      servings: t('gallery.cakes.macaroon.servings'),
      image: "https://i.imgur.com/Ve6bqSL.jpeg",
      description: t('gallery.cakes.macaroon.description'),
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
      name: t('gallery.cakes.vintage.name'),
      price: 210,
      servings: t('gallery.cakes.vintage.servings'),
      image: "https://i.imgur.com/xjzX5Ep.jpeg",
      description: t('gallery.cakes.vintage.description'),
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
      name: t('gallery.cakes.sunMoon.name'),
      price: 120,
      servings: t('gallery.cakes.sunMoon.servings'),
      image: "https://i.imgur.com/anLj4Uc.jpeg",
      description: t('gallery.cakes.sunMoon.description'),
      presets: {
        flourType: "chocolate",
        filling: "chocolate",
        frosting: "fondant",
        decorations: ["sun-moon", "stars"],
        cakeTopper: ""
      }
    },
  ];

  const handleOrderClick = (cake: typeof cakes[0]) => {
    navigate('/customization', { state: { selectedCake: cake } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair font-bold text-cake-burgundy mb-8 text-center">
        {t('gallery.title')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cakes.map((cake) => (
          <Card key={cake.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="font-playfair text-xl">{cake.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-square mb-4">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <p className="text-gray-600 mb-2">{cake.description}</p>
              <p className="text-cake-burgundy font-semibold mb-1">${cake.price}</p>
              <p className="text-gray-600 text-sm">{t('gallery.serves')} {cake.servings}</p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-cake-burgundy hover:bg-cake-rose text-white"
                onClick={() => handleOrderClick(cake)}
              >
                {t('gallery.placeOrder')}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;