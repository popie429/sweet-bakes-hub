import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const CAKE_WEIGHTS = [
  { weight: "0.5", label: "½ a pound", guests: "7-9", price: 60 },
  { weight: "1", label: "1 lb", guests: "12-15", price: 75 },
  { weight: "1.5", label: "1 ½ lb", guests: "18-22", price: 90 },
  { weight: "2", label: "2 lbs", guests: "25-30", price: 105 },
  { weight: "2.5", label: "2 ½ lbs", guests: "32-38", price: 120 },
  { weight: "3", label: "3 lbs", guests: "40-45", price: 135 },
  { weight: "3.5", label: "3 ½ lbs", guests: "47-53", price: 150 },
  { weight: "4", label: "4 lbs", guests: "55-60", price: 165 },
  { weight: "4.5", label: "4 ½ lbs", guests: "62-68", price: 180 },
  { weight: "5", label: "5 lbs", guests: "70-75", price: 195 },
];

export const CakeWeightSection = () => {
  return (
    <FormField
      name="cakeWeight"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Cake Weight</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {CAKE_WEIGHTS.map((option) => (
                <div key={option.weight} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.weight} id={`weight-${option.weight}`} />
                  <Label htmlFor={`weight-${option.weight}`}>
                    {option.label} ({option.guests} guests) +${option.price}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <p className="text-sm text-gray-500 mt-2">
            Note: These are approximate figures. The actual number of servings may vary depending on how the cake is cut.
          </p>
        </FormItem>
      )}
    />
  );
};