import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const flavorOptions = [
  { id: "vanilla", label: "Vanilla" },
  { id: "chocolate", label: "Chocolate" },
  { id: "redVelvet", label: "Red Velvet" },
  { id: "marble", label: "Marble" },
];

export const CakeFlavorSection = () => {
  return (
    <FormField
      name="flourType"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">Cake Flavor</FormLabel>
          <div className="grid grid-cols-2 gap-4">
            {flavorOptions.map((flavor) => (
              <FormField
                key={flavor.id}
                name="flourType"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={flavor.id}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value === flavor.id}
                          onCheckedChange={(checked) => {
                            field.onChange(checked ? flavor.id : null);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{flavor.label}</FormLabel>
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