import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { CakeFlavorSection } from "@/components/cake-customization/CakeFlavorSection";
import { FillingSection } from "@/components/cake-customization/FillingSection";
import { FrostingSection } from "@/components/cake-customization/FrostingSection";
import { DecorationsSection } from "@/components/cake-customization/DecorationsSection";
import { CakeTopperSection } from "@/components/cake-customization/CakeTopperSection";
import { PresetSelections } from "@/components/cake-customization/PresetSelections";
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
      flourType: "vanilla",
      filling: "vanilla",
      frosting: "buttercream",
      decorations: [],
      cakeTopper: "",
    },
  });

  const watchAll = form.watch();

  useEffect(() => {
    let newTotal = 0;
    
    // Add base cake price based on flavor
    switch (watchAll.flourType) {
      case "vanilla":
        newTotal += 30;
        break;
      case "chocolate":
        newTotal += 35;
        break;
      case "redVelvet":
        newTotal += 40;
        break;
      case "marble":
        newTotal += 45;
        break;
    }
    
    // Add filling price
    switch (watchAll.filling) {
      case "vanilla":
        newTotal += 8;
        break;
      case "chocolate":
        newTotal += 10;
        break;
      case "strawberry":
        newTotal += 12;
        break;
      case "lemon":
        newTotal += 10;
        break;
    }
    
    // Add frosting price
    switch (watchAll.frosting) {
      case "buttercream":
        newTotal += 15;
        break;
      case "cream-cheese":
        newTotal += 18;
        break;
      case "fondant":
        newTotal += 25;
        break;
      case "whipped":
        newTotal += 12;
        break;
    }
    
    // Add decoration prices
    if (watchAll.decorations) {
      watchAll.decorations.forEach((decoration) => {
        switch (decoration) {
          case "stars":
            newTotal += 3;
            break;
          case "hearts":
            newTotal += 3;
            break;
          case "sprinkles":
            newTotal += 2;
            break;
        }
      });
    }
    
    // Add cake topper price ($5 for all toppers)
    if (watchAll.cakeTopper) {
      newTotal += 5;
    }
    
    setTotal(newTotal);
  }, [watchAll]);

  const onSubmit = (data: CakeCustomizationForm) => {
    console.log("Cake customization:", data);
    navigate("/calendar", { state: { customization: data, total } });
  };

  const handlePresetToggle = (preset: string, value: boolean) => {
    console.log(`Preset ${preset} toggled: ${value}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair font-bold text-cake-burgundy mb-8 text-center">
        Customize Your Cake
      </h1>

      {selectedCake && (
        <PresetSelections
          selectedCake={selectedCake}
          onPresetToggle={handlePresetToggle}
        />
      )}

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
            priceInfo="Mini Stars $3 • Hearts $3 • Sprinkles $2"
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

          <Button
            type="submit"
            className="w-full bg-cake-burgundy hover:bg-cake-rose text-white"
            size="lg"
          >
            Continue to Scheduling
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Customization;