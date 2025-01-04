import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const FrostingSection = () => {
  return (
    <FormField
      name="frosting"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">Frosting</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select frosting" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="buttercream">Buttercream</SelectItem>
              <SelectItem value="cream-cheese">Cream Cheese</SelectItem>
              <SelectItem value="fondant">Fondant</SelectItem>
              <SelectItem value="whipped">Whipped Cream</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};