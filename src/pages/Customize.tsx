import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomizationForm } from "@/components/cake-customization/CustomizationForm";
import { calculateTotal } from "@/utils/priceCalculations";

interface CustomizationForm {
  cakeWeight: string;
  flourType: string;
  filling: string[];  // Changed from string to string[]
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
      filling: [],  // Changed from "" to []
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