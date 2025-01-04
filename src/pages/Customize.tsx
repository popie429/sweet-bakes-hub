import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CakeFlavorSection } from "@/components/cake-customization/CakeFlavorSection";
import { FillingSection } from "@/components/cake-customization/FillingSection";
import { FrostingSection } from "@/components/cake-customization/FrostingSection";
import { DecorationsSection } from "@/components/cake-customization/DecorationsSection";
import { CakeTopperSection } from "@/components/cake-customization/CakeTopperSection";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface CustomizationForm {
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
      flourType: "",
      filling: "",
      frosting: "",
      decorations: [],
      cakeTopper: "",
    },
  });

  // Watch for form changes to update total
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

  const onSubmit = (data: CustomizationForm) => {
    console.log("Form submitted:", data);
    navigate("/calendar", { state: { customization: data } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair font-bold text-cake-burgundy mb-8 text-center">
        Design Your Custom Cake
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-4">Base Cake</h2>
            <CakeFlavorSection />
            <div className="text-sm text-gray-500 mt-2">
              Vanilla $30 • Chocolate $35 • Red Velvet $40 • Marble $45
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-4">Filling</h2>
            <FillingSection />
            <div className="text-sm text-gray-500 mt-2">
              Vanilla Custard $8 • Chocolate Ganache $10 • Strawberry $12 • Lemon Curd $10
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-4">Frosting</h2>
            <FrostingSection />
            <div className="text-sm text-gray-500 mt-2">
              Buttercream $15 • Cream Cheese $18 • Fondant $25 • Whipped Cream $12
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-4">Decorations</h2>
            <DecorationsSection />
            <div className="text-sm text-gray-500 mt-2">
              Mini Stars $3 • Hearts $3 • Sprinkles $2
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-4">Cake Topper</h2>
            <CakeTopperSection />
            <div className="text-sm text-gray-500 mt-2">
              All toppers $5
            </div>
          </div>

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

export default Customize;