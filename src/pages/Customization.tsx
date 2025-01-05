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
import { CakeWeightSection } from "@/components/cake-customization/CakeWeightSection";
import { useState, useEffect } from "react";
import { calculateTotal } from "@/utils/priceCalculations";

const Customization = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCake = location.state?.selectedCake;
  const [total, setTotal] = useState(0);

  const form = useForm({
    defaultValues: {
      cakeSize: ["6"], // Random preset: 6 inch cake
      flourType: "vanilla", // Random preset: vanilla flavor
      filling: ["strawberry"], // Random preset: strawberry filling
      frosting: "buttercream", // Random preset: buttercream frosting
      decorations: ["sprinkles", "roses"], // Random preset: sprinkles and roses
      cakeTopper: "happybirthday", // Random preset: Happy Birthday topper
    },
  });

  const watchAll = form.watch();

  useEffect(() => {
    const newTotal = calculateTotal(watchAll);
    setTotal(newTotal);
  }, [watchAll]);

  const onSubmit = (data: any) => {
    console.log("Cake customization:", data);
    navigate("/calendar", { state: { customization: data, total } });
  };

  return (
    <div className="min-h-screen bg-cake-pink px-4 py-8">
      <h1 className="text-4xl font-cormorant font-bold text-cake-rose mb-8 text-center">
        Customize Your Cake
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-cormorant text-cake-burgundy mb-4">Cake Size</h2>
            <CakeWeightSection />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-cormorant text-cake-burgundy mb-4">Base Cake</h2>
            <CakeFlavorSection />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-cormorant text-cake-burgundy mb-4">Filling</h2>
            <FillingSection />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-cormorant text-cake-burgundy mb-4">Frosting</h2>
            <FrostingSection />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-cormorant text-cake-burgundy mb-4">Decorations</h2>
            <DecorationsSection />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-cormorant text-cake-burgundy mb-4">Cake Topper</h2>
            <CakeTopperSection />
          </div>

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
    </div>
  );
};

export default Customization;