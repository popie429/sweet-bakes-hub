export const calculateTotal = (formData: {
  flourType?: string;
  filling?: string[];
  frosting?: string;
  decorations?: string[];
  cakeTopper?: string;
}) => {
  let total = 0;
  
  // Base cake price based on flavor
  const flavorPrices: Record<string, number> = {
    vanilla: 30,
    chocolate: 35,
    redVelvet: 40,
    marble: 45
  };
  total += flavorPrices[formData.flourType || ''] || 0;
  
  // Filling prices (now handling multiple selections)
  const fillingPrices: Record<string, number> = {
    vanilla: 8,
    chocolate: 10,
    strawberry: 12,
    lemon: 10
  };
  formData.filling?.forEach(filling => {
    total += fillingPrices[filling] || 0;
  });
  
  // Frosting price
  const frostingPrices: Record<string, number> = {
    buttercream: 15,
    "cream-cheese": 18,
    fondant: 25,
    whipped: 12,
    chocolateGanache: 15,
    vanillaFondant: 25,
    marbleFondant: 25
  };
  total += frostingPrices[formData.frosting || ''] || 0;
  
  // Decorations prices
  const decorationPrices: Record<string, number> = {
    stars: 3,
    hearts: 3,
    sprinkles: 2,
    fondantPiglet: 10,
    fondantFlowers: 5,
    donJulioBottle: 5,
    goldDetails: 8,
    macaroons: 9,
    freshFlowers: 12,
    roses: 4,
    pearls: 3,
    sunMoon: 15,
    chocolateStrawberries: 3
  };
  
  formData.decorations?.forEach(decoration => {
    total += decorationPrices[decoration] || 0;
  });
  
  // Cake topper price (all toppers cost $5)
  if (formData.cakeTopper) {
    total += 5;
  }
  
  return total;
};