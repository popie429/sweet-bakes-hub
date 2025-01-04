import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const FillingSection = () => {
  return (
    <FormField
      name="filling"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">Filling</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select filling" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="vanilla">Vanilla Custard</SelectItem>
              <SelectItem value="chocolate">Chocolate Ganache</SelectItem>
              <SelectItem value="strawberry">Strawberry</SelectItem>
              <SelectItem value="lemon">Lemon Curd</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};