import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const decorationOptions = [
  { id: "stars", label: "Mini Stars", price: 3 },
  { id: "hearts", label: "Hearts", price: 3 },
  { id: "sprinkles", label: "Sprinkles", price: 2 },
  { id: "fondantPiglet", label: "Fondant Piglet", price: 10 },
  { id: "fondantFlowers", label: "Fondant Flowers", price: 5 },
  { id: "donJulioBottle", label: "Don Julio Bottle", price: 5 },
  { id: "goldDetails", label: "Gold Details", price: 8 },
  { id: "macaroons", label: "Macaroons (3 pieces)", price: 9 },
  { id: "freshFlowers", label: "Fresh Flowers", price: 12 },
  { id: "roses", label: "Buttercream Roses", price: 4 },
  { id: "pearls", label: "Sugar Pearls", price: 3 },
  { id: "sunMoon", label: "Sun & Moon Design", price: 15 },
  { id: "chocolateStrawberries", label: "Chocolate Covered Strawberries", price: 3 },
];

export const DecorationsSection = () => {
  return (
    <FormField
      name="decorations"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">Decorations</FormLabel>
          <div className="grid grid-cols-2 gap-4">
            {decorationOptions.map((decoration) => (
              <FormField
                key={decoration.id}
                name="decorations"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={decoration.id}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(decoration.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...(field.value || []), decoration.id])
                              : field.onChange(
                                  field.value?.filter((value) => value !== decoration.id)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {decoration.label} (${decoration.price})
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