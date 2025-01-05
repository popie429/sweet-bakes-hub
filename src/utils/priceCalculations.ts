interface PriceOptions {
  cakeSize?: string[];
  flourType?: string;
  filling?: string[];
  frosting?: string;
  decorations?: string[];
  cakeTopper?: string;
}

const SIZE_PRICES: Record<string, number> = {
  "5": 60,
  "6": 75,
  "7": 90,
  "8": 105,
  "9": 120,
  "10": 135,
  "12": 150,
  "14": 165,
  "16": 180,
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

  // Add cake size price
  if (Array.isArray(options.cakeSize)) {
    options.cakeSize.forEach((size) => {
      total += SIZE_PRICES[size] || 0;
    });
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