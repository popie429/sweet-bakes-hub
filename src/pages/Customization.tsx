import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { CakeFlavorSection } from "@/components/cake-customization/CakeFlavorSection";
import { FillingSection } from "@/components/cake-customization/FillingSection";
import { FrostingSection } from "@/components/cake-customization/FrostingSection";
import { DecorationsSection } from "@/components/cake-customization/DecorationsSection";
import { CakeTopperSection } from "@/components/cake-customization/CakeTopperSection";

interface CakeCustomizationForm {
  flourType: string;
  filling: string;
  frosting: string;
  decorations: string[];
  cakeTopper: string;
}

const Customization = () => {
  const navigate = useNavigate();
  const form = useForm<CakeCustomizationForm>({
    defaultValues: {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair font-bold text-cake-burgundy mb-8 text-center">
        Customize Your Cake
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
          <CakeFlavorSection />
          <FillingSection />
          <FrostingSection />
          <DecorationsSection />
          <CakeTopperSection />

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