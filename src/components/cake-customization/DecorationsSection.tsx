import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const decorationOptions = [
  { id: "stars", label: "Mini Stars" },
  { id: "hearts", label: "Hearts" },
  { id: "sprinkles", label: "Sprinkles" },
];

export const DecorationsSection = () => {
  return (
    <FormField
      name="decorations"
      render={() => (
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
                              ? field.onChange([...field.value, decoration.id])
                              : field.onChange(
                                  field.value?.filter((value) => value !== decoration.id)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{decoration.label}</FormLabel>
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