import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomizationForm } from "@/components/cake-customization/CustomizationForm";

interface CustomizationForm {
  cakeWeight: string;
  flourType: string;
  filling: string;
  frosting: string;
  decorations: string[];
  cakeTopper: string;
}

const Customize = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  
  const form = useForm<CustomizationForm>({
    defaultValues: {
      cakeWeight: "",
      flourType: "",
      filling: "",
      frosting: "",
      decorations: [],
      cakeTopper: "",
    },
  });

  const watchAll = form.watch();
  
  useEffect(() => {
    let newTotal = 0;
    
    // Add cake weight price
    const weightPrices: Record<string, number> = {
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
    newTotal += weightPrices[watchAll.cakeWeight] || 0;
    
    // Add base cake price based on flavor
    const flavorPrices: Record<string, number> = {
      vanilla: 30,
      chocolate: 35,
      redVelvet: 40,
      marble: 45,
    };
    newTotal += flavorPrices[watchAll.flourType] || 0;
    
    // Add filling price
    const fillingPrices: Record<string, number> = {
      vanilla: 8,
      chocolate: 10,
      strawberry: 12,
      lemon: 10,
    };
    if (watchAll.filling) {
      newTotal += fillingPrices[watchAll.filling] || 0;
    }
    
    // Add frosting price
    const frostingPrices: Record<string, number> = {
      buttercream: 15,
      "cream-cheese": 18,
      fondant: 25,
      whipped: 12,
      chocolateGanache: 15,
      vanillaFondant: 25,
      marbleFondant: 25,
    };
    newTotal += frostingPrices[watchAll.frosting] || 0;
    
    // Add decoration prices
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
      chocolateStrawberries: 3,
    };
    
    if (Array.isArray(watchAll.decorations)) {
      watchAll.decorations.forEach((decoration) => {
        newTotal += decorationPrices[decoration] || 0;
      });
    }
    
    // Add cake topper price (all toppers cost $5)
    if (watchAll.cakeTopper) {
      newTotal += 5;
    }
    
    setTotal(newTotal);
  }, [watchAll]);

  const onSubmit = (data: CustomizationForm) => {
    console.log("Form submitted:", data);
    navigate("/calendar", { state: { customization: data } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair font-bold text-cake-burgundy mb-8 text-center">
        Design Your Custom Cake
      </h1>
      <CustomizationForm form={form} onSubmit={onSubmit} total={total} />
    </div>
  );
};

export default Customize;