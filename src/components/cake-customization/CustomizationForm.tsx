import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { CakeWeightSection } from "./CakeWeightSection";
import { CakeFlavorSection } from "./CakeFlavorSection";
import { FillingSection } from "./FillingSection";
import { FrostingSection } from "./FrostingSection";
import { DecorationsSection } from "./DecorationsSection";
import { CakeTopperSection } from "./CakeTopperSection";
import { ClearSelectionsButton } from "./ClearSelectionsButton";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface CustomizationFormProps {
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  total: number;
}

export const CustomizationForm = ({ form, onSubmit, total }: CustomizationFormProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-cormorant text-cake-burgundy">Cake Size</h2>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white rounded-b-lg shadow-lg p-6 pt-2">
            <CakeWeightSection />
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-cormorant text-cake-burgundy">Base Cake</h2>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white rounded-b-lg shadow-lg p-6 pt-2">
            <CakeFlavorSection />
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-cormorant text-cake-burgundy">Filling</h2>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white rounded-b-lg shadow-lg p-6 pt-2">
            <FillingSection />
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-cormorant text-cake-burgundy">Frosting</h2>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white rounded-b-lg shadow-lg p-6 pt-2">
            <FrostingSection />
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-cormorant text-cake-burgundy">Decorations</h2>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white rounded-b-lg shadow-lg p-6 pt-2">
            <DecorationsSection />
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-cormorant text-cake-burgundy">Cake Topper</h2>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white rounded-b-lg shadow-lg p-6 pt-2">
            <CakeTopperSection />
          </CollapsibleContent>
        </Collapsible>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-cormorant text-cake-burgundy">Total</h2>
            <span className="text-2xl font-bold text-cake-burgundy">${total}</span>
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
  );
};