import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const fillingOptions = [
  { id: "vanilla", label: "Vanilla Custard", price: 0 },
  { id: "chocolate", label: "Chocolate Ganache", price: 10 },
  { id: "strawberry", label: "Strawberry", price: 12 },
  { id: "lemon", label: "Lemon Curd", price: 10 },
  { id: "pineapple", label: "Pineapple", price: 0 },
  { id: "peach", label: "Peach", price: 0 }
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
                          checked={field.value?.includes(filling.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...(field.value || []), filling.id])
                              : field.onChange(
                                  field.value?.filter((value) => value !== filling.id)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {filling.label}{filling.price > 0 ? ` ($${filling.price})` : ''}
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