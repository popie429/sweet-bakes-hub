import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const CakeFlavorSection = () => {
  return (
    <FormField
      name="flourType"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">Cake Flavor</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-2 gap-4"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="vanilla" />
                </FormControl>
                <FormLabel className="font-normal">Vanilla</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="chocolate" />
                </FormControl>
                <FormLabel className="font-normal">Chocolate</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="redVelvet" />
                </FormControl>
                <FormLabel className="font-normal">Red Velvet</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="marble" />
                </FormControl>
                <FormLabel className="font-normal">Marble</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
};