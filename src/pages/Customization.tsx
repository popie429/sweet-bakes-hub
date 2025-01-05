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
import { calculateTotal } from "@/utils/priceCalculations";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CakeCustomizationForm {
  flourType: string;
  filling: string[];
  frosting: string;
  decorations: string[];
  cakeTopper: string;
}

const CustomizationSection = ({ children, title, tooltip }: { 
  children: React.ReactNode; 
  title: string; 
  tooltip: string;
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
      filling: [],
      frosting: "",
      decorations: [],
      cakeTopper: "",
    },
  });

  const watchAll = form.watch();

  useEffect(() => {
    const newTotal = calculateTotal(watchAll);
    setTotal(newTotal);
  }, [watchAll]);

  const onSubmit = (data: CakeCustomizationForm) => {
    console.log("Cake customization:", data);
    navigate("/calendar", { state: { customization: data, total } });
  };

  return (
    <div className="min-h-screen bg-cake-pink px-4 py-8">
      <h1 className="text-4xl font-cormorant font-bold text-cake-rose mb-8 text-center">
        Customize Your Cake
      </h1>

      <div className="mb-6">
        <ClearSelectionsButton form={form} />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
          <CustomizationSection 
            title="Cake Flavor" 
            tooltip="Select your preferred cake flavor. Additional charges may apply for premium flavors."
          >
            <CakeFlavorSection />
          </CustomizationSection>

          <CustomizationSection 
            title="Filling" 
            tooltip="Choose your cake filling. Some premium fillings may incur additional charges."
          >
            <FillingSection />
          </CustomizationSection>

          <CustomizationSection 
            title="Frosting" 
            tooltip="Select your frosting type. Special frosting techniques may have additional costs."
          >
            <FrostingSection />
          </CustomizationSection>

          <CustomizationSection 
            title="Decorations" 
            tooltip="Choose your cake decorations. Complex designs and additional elements will affect the final price."
          >
            <DecorationsSection />
          </CustomizationSection>

          <CustomizationSection 
            title="Cake Topper" 
            tooltip="Select a cake topper. Custom messages or designs may require additional fees."
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
            <ClearSelectionsButton form={form} />
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