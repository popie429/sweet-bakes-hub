import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { CakeFlavorSection } from "@/components/cake-customization/CakeFlavorSection";
import { FillingSection } from "@/components/cake-customization/FillingSection";
import { FrostingSection } from "@/components/cake-customization/FrostingSection";
import { DecorationsSection } from "@/components/cake-customization/DecorationsSection";
import { CakeTopperSection } from "@/components/cake-customization/CakeTopperSection";
import { ClearSelectionsButton } from "@/components/cake-customization/ClearSelectionsButton";
import { HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CakeCustomizationForm {
  flourType: string;
  filling: string;
  frosting: string;
  decorations: string[];
  cakeTopper: string;
}

const CustomizationSection = ({ children, title, tooltip, priceInfo }: { 
  children: React.ReactNode; 
  title: string; 
  tooltip: string;
  priceInfo?: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <div className="flex items-center gap-2 mb-4">
      <h2 className="text-xl font-playfair text-cake-burgundy">{title}</h2>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <HelpCircle className="h-5 w-5 text-gray-400" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-xs">{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
    {children}
    {priceInfo && (
      <div className="text-sm text-gray-500 mt-2">
        {priceInfo}
      </div>
    )}
  </div>
);

const Customization = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCake = location.state?.selectedCake;
  const [total, setTotal] = useState(0);

  const form = useForm<CakeCustomizationForm>({
    defaultValues: selectedCake?.presets || {
      flourType: "",
      filling: "",
      frosting: "",
      decorations: [],
      cakeTopper: "",
    },
  });

  const watchAll = form.watch();

  useEffect(() => {
    let newTotal = calculateTotal(watchAll);
    setTotal(newTotal);
  }, [watchAll]);

  const calculateTotal = (formData: CakeCustomizationForm) => {
    let total = 0;
    
    // Base cake price based on flavor
    const flavorPrices: Record<string, number> = {
      vanilla: 30,
      chocolate: 35,
      redVelvet: 40,
      marble: 45
    };
    total += flavorPrices[formData.flourType] || 0;
    
    // Filling price
    const fillingPrices: Record<string, number> = {
      vanilla: 8,
      chocolate: 10,
      strawberry: 12,
      lemon: 10
    };
    total += fillingPrices[formData.filling] || 0;
    
    // Frosting price
    const frostingPrices: Record<string, number> = {
      buttercream: 15,
      "cream-cheese": 18,
      fondant: 25,
      whipped: 12
    };
    total += frostingPrices[formData.frosting] || 0;
    
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
    
    // Cake topper price
    if (formData.cakeTopper) {
      total += 5; // All toppers cost $5
    }
    
    return total;
  };

  const onSubmit = (data: CakeCustomizationForm) => {
    console.log("Cake customization:", data);
    navigate("/calendar", { state: { customization: data, total } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair font-bold text-cake-burgundy mb-8 text-center">
        Customize Your Cake
      </h1>

      <div className="mb-6">
        <ClearSelectionsButton />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
          <CustomizationSection 
            title="Cake Flavor" 
            tooltip="Select your preferred cake flavor. Additional charges may apply for premium flavors."
            priceInfo="Vanilla $30 • Chocolate $35 • Red Velvet $40 • Marble $45"
          >
            <CakeFlavorSection />
          </CustomizationSection>

          <CustomizationSection 
            title="Filling" 
            tooltip="Choose your cake filling. Some premium fillings may incur additional charges."
            priceInfo="Vanilla Custard $8 • Chocolate Ganache $10 • Strawberry $12 • Lemon Curd $10"
          >
            <FillingSection />
          </CustomizationSection>

          <CustomizationSection 
            title="Frosting" 
            tooltip="Select your frosting type. Special frosting techniques may have additional costs."
            priceInfo="Buttercream $15 • Cream Cheese $18 • Fondant $25 • Whipped Cream $12"
          >
            <FrostingSection />
          </CustomizationSection>

          <CustomizationSection 
            title="Decorations" 
            tooltip="Choose your cake decorations. Complex designs and additional elements will affect the final price."
            priceInfo="Prices vary by decoration type"
          >
            <DecorationsSection />
          </CustomizationSection>

          <CustomizationSection 
            title="Cake Topper" 
            tooltip="Select a cake topper. Custom messages or designs may require additional fees."
            priceInfo="All toppers $5"
          >
            <CakeTopperSection />
          </CustomizationSection>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-playfair text-cake-burgundy">Total</h2>
              <span className="text-2xl font-bold">${total}</span>
            </div>
          </div>

          <div className="space-y-4">
            <ClearSelectionsButton />
            <Button
              type="submit"
              className="w-full bg-cake-burgundy hover:bg-cake-rose text-white"
              size="lg"
            >
              Continue to Scheduling
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Customization;