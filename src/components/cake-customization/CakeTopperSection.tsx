import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const topperOptions = [
  { id: "happybirthday", label: "Happy Birthday" },
  { id: "mrandmrs", label: "Mr & Mrs" },
  { id: "ohbaby", label: "Oh, Baby!" },
  { id: "happyfathersday", label: "Happy Father's Day" },
  { id: "happymothersday", label: "Happy Mother's Day" },
  { id: "happyvalentinesday", label: "Happy Valentine's Day" },
];

export const CakeTopperSection = () => {
  return (
    <FormField
      name="cakeTopper"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">Cake Topper</FormLabel>
          <div className="grid grid-cols-2 gap-4">
            {topperOptions.map((topper) => (
              <FormField
                key={topper.id}
                name="cakeTopper"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={topper.id}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value === topper.id}
                          onCheckedChange={(checked) => {
                            field.onChange(checked ? topper.id : null);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{topper.label}</FormLabel>
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