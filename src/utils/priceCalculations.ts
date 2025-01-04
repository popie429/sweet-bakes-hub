interface PriceOptions {
  cakeWeight?: string;
  flourType?: string;
  filling?: string[];
  frosting?: string;
  decorations?: string[];
  cakeTopper?: string;
}

const WEIGHT_PRICES: Record<string, number> = {
  "0.5": 60,
  "1": 75,
  "1.5": 90,
  "2": 105,
  "2.5": 120,
  "3": 135,
  "3.5": 150,
  "4": 165,
  "4.5": 180,
  "5": 195,
};

const FLAVOR_PRICES: Record<string, number> = {
  vanilla: 30,
  chocolate: 35,
  redVelvet: 40,
  marble: 45,
};

const FILLING_PRICES: Record<string, number> = {
  vanilla: 8,
  chocolate: 10,
  strawberry: 12,
  lemon: 10,
};

const FROSTING_PRICES: Record<string, number> = {
  buttercream: 15,
  "cream-cheese": 18,
  fondant: 25,
  whipped: 12,
  chocolateGanache: 15,
  vanillaFondant: 25,
  marbleFondant: 25,
};

const DECORATION_PRICES: Record<string, number> = {
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
  chocolateStrawberries: 3,
};

export const calculateTotal = (options: PriceOptions): number => {
  let total = 0;

  // Add cake weight price
  if (options.cakeWeight) {
    total += WEIGHT_PRICES[options.cakeWeight] || 0;
  }

  // Add base cake price based on flavor
  if (options.flourType) {
    total += FLAVOR_PRICES[options.flourType] || 0;
  }

  // Add filling prices
  if (Array.isArray(options.filling)) {
    options.filling.forEach((filling) => {
      total += FILLING_PRICES[filling] || 0;
    });
  }

  // Add frosting price
  if (options.frosting) {
    total += FROSTING_PRICES[options.frosting] || 0;
  }

  // Add decoration prices
  if (Array.isArray(options.decorations)) {
    options.decorations.forEach((decoration) => {
      total += DECORATION_PRICES[decoration] || 0;
    });
  }

  // Add cake topper price (all toppers cost $5)
  if (options.cakeTopper) {
    total += 5;
  }

  return total;
};