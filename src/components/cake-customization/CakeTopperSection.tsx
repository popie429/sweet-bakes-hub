import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const topperOptions = [
  "Happy Birthday",
  "Mr & Mrs",
  "Oh, Baby!",
  "Happy Father's Day",
  "Happy Mother's Day",
  "Happy Valentine's Day",
];

export const CakeTopperSection = () => {
  return (
    <FormField
      name="cakeTopper"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">Cake Topper</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a cake topper" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {topperOptions.map((topper) => (
                <SelectItem
                  key={topper}
                  value={topper.toLowerCase().replace(/[^a-z]/g, "")}
                >
                  {topper}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};