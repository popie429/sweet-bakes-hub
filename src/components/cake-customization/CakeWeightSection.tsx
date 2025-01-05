import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CAKE_SIZES = [
  { size: "5", label: "5 inch", guests: "4-6", price: 60 },
  { size: "6", label: "6 inch", guests: "8-10", price: 75 },
  { size: "7", label: "7 inch", guests: "12-15", price: 90 },
  { size: "8", label: "8 inch", guests: "16-20", price: 105 },
  { size: "9", label: "9 inch", guests: "25-30", price: 120 },
  { size: "10", label: "10 inch", guests: "35-40", price: 135 },
  { size: "12", label: "12 inch", guests: "45-50", price: 150 },
  { size: "14", label: "14 inch", guests: "60-65", price: 165 },
  { size: "16", label: "16 inch", guests: "75-80", price: 180 },
];

export const CakeWeightSection = () => {
  return (
    <FormField
      name="cakeSize"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Cake Size</FormLabel>
          <FormControl>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {CAKE_SIZES.slice(0, 4).map((option) => (
                  <div key={option.size} className="flex items-start space-x-3 space-y-0">
                    <Checkbox
                      checked={field.value?.includes(option.size)}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || [];
                        if (checked) {
                          field.onChange([...currentValue, option.size]);
                        } else {
                          field.onChange(currentValue.filter((value: string) => value !== option.size));
                        }
                      }}
                    />
                    <div className="space-y-1 leading-none">
                      <Label className="text-sm font-medium leading-none">
                        {option.label} ({option.guests} guests)
                      </Label>
                      <p className="text-sm text-muted-foreground">+${option.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {CAKE_SIZES.slice(4).map((option) => (
                  <div key={option.size} className="flex items-start space-x-3 space-y-0">
                    <Checkbox
                      checked={field.value?.includes(option.size)}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || [];
                        if (checked) {
                          field.onChange([...currentValue, option.size]);
                        } else {
                          field.onChange(currentValue.filter((value: string) => value !== option.size));
                        }
                      }}
                    />
                    <div className="space-y-1 leading-none">
                      <Label className="text-sm font-medium leading-none">
                        {option.label} ({option.guests} guests)
                      </Label>
                      <p className="text-sm text-muted-foreground">+${option.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FormControl>
          <p className="text-sm text-gray-500 mt-2">
            Note: These are approximate figures. The actual number of servings may vary depending on how the cake is cut.
          </p>
        </FormItem>
      )}
    />
  );
};