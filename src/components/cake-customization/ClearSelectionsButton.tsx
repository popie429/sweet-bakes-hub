import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";

interface ClearSelectionsButtonProps {
  form: UseFormReturn<any>;
}

export const ClearSelectionsButton = ({ form }: ClearSelectionsButtonProps) => {
  const handleClear = () => {
    form.reset({
      cakeWeight: "",
      flourType: "",
      filling: [],
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