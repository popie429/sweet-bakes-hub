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

const CustomizationSection = ({ children, title, tooltip }: { children: React.ReactNode; title: string; tooltip: string }) => (
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

  const form = useForm<CakeCustomizationForm>({
    defaultValues: selectedCake?.presets || {
      flourType: "vanilla",
      filling: "vanilla",
      frosting: "buttercream",
      decorations: [],
      cakeTopper: "",
    },
  });

  const onSubmit = (data: CakeCustomizationForm) => {
    console.log("Cake customization:", data);
    navigate("/calendar");
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