import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const frostingOptions = [
  { id: "buttercream", label: "Buttercream", price: 15 },
  { id: "cream-cheese", label: "Cream Cheese", price: 18 },
  { id: "fondant", label: "Fondant", price: 25 },
  { id: "whipped", label: "Whipped Cream", price: 12 },
  { id: "chocolateGanache", label: "Chocolate Ganache", price: 15 },
  { id: "vanillaFondant", label: "Vanilla Fondant", price: 25 },
  { id: "marbleFondant", label: "Marble Fondant", price: 25 },
];

export const FrostingSection = () => {
  return (
    <FormField
      name="frosting"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">Frosting</FormLabel>
          <div className="grid grid-cols-2 gap-4">
            {frostingOptions.map((frosting) => (
              <FormField
                key={frosting.id}
                name="frosting"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={frosting.id}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value === frosting.id}
                          onCheckedChange={(checked) => {
                            field.onChange(checked ? frosting.id : null);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {frosting.label} (${frosting.price})
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>
        </FormItem>
      )}
    />
  );
};