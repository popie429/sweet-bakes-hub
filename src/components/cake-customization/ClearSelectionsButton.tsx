import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export const ClearSelectionsButton = () => {
  const form = useForm();

  const handleClear = () => {
    form.reset({
      flourType: "",
      filling: "",
      frosting: "",
      decorations: [],
      cakeTopper: "",
    });
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleClear}
      className="w-full border-cake-burgundy text-cake-burgundy hover:bg-cake-rose/10"
    >
      Clear All Selections
    </Button>
  );
};