import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const frostingOptions = [
  { id: "buttercream", label: "Buttercream" },
  { id: "cream-cheese", label: "Cream Cheese" },
  { id: "fondant", label: "Fondant" },
  { id: "whipped", label: "Whipped Cream" },
  { id: "chocolateGanache", label: "Chocolate Ganache" },
  { id: "vanillaFondant", label: "Vanilla Fondant" },
  { id: "marbleFondant", label: "Marble Fondant" },
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
                      <FormLabel className="font-normal">{frosting.label}</FormLabel>
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