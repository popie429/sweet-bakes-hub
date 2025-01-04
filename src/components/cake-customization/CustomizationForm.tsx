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

interface CustomizationFormProps {
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  total: number;
}

export const CustomizationForm = ({ form, onSubmit, total }: CustomizationFormProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-playfair text-cake-burgundy mb-4">Cake Weight</h2>
          <CakeWeightSection />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-playfair text-cake-burgundy mb-4">Base Cake</h2>
          <CakeFlavorSection />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-playfair text-cake-burgundy mb-4">Filling</h2>
          <FillingSection />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-playfair text-cake-burgundy mb-4">Frosting</h2>
          <FrostingSection />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-playfair text-cake-burgundy mb-4">Decorations</h2>
          <DecorationsSection />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-playfair text-cake-burgundy mb-4">Cake Topper</h2>
          <CakeTopperSection />
        </div>

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
  );
};