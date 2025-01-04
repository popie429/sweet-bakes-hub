import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const fillingOptions = [
  { id: "vanilla", label: "Vanilla Custard" },
  { id: "chocolate", label: "Chocolate Ganache" },
  { id: "strawberry", label: "Strawberry" },
  { id: "lemon", label: "Lemon Curd" },
];

export const FillingSection = () => {
  return (
    <FormField
      name="filling"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">Filling</FormLabel>
          <div className="grid grid-cols-2 gap-4">
            {fillingOptions.map((filling) => (
              <FormField
                key={filling.id}
                name="filling"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={filling.id}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value === filling.id}
                          onCheckedChange={(checked) => {
                            field.onChange(checked ? filling.id : null);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{filling.label}</FormLabel>
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