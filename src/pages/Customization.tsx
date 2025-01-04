import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";

interface CakeCustomizationForm {
  flourType: string;
  filling: string;
  frosting: string;
  decorations: string[];
  cakeTopper: string;
}

const Customization = () => {
  const navigate = useNavigate();
  const form = useForm<CakeCustomizationForm>({
    defaultValues: {
      flourType: "vanilla",
      filling: "vanilla",
      frosting: "buttercream",
      decorations: [],
      cakeTopper: "",
    },
  });

  const decorationOptions = [
    { id: "stars", label: "Mini Stars" },
    { id: "hearts", label: "Hearts" },
    { id: "sprinkles", label: "Sprinkles" },
  ];

  const topperOptions = [
    "Happy Birthday",
    "Mr & Mrs",
    "Oh, Baby!",
    "Happy Father's Day",
    "Happy Mother's Day",
    "Happy Valentine's Day",
  ];

  const onSubmit = (data: CakeCustomizationForm) => {
    console.log("Cake customization:", data);
    navigate("/calendar");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair font-bold text-cake-burgundy mb-8 text-center">
        Customize Your Cake
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
          <FormField
            control={form.control}
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

          <FormField
            control={form.control}
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

          <FormField
            control={form.control}
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

          <FormField
            control={form.control}
            name="decorations"
            render={() => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">Decorations</FormLabel>
                <div className="grid grid-cols-2 gap-4">
                  {decorationOptions.map((decoration) => (
                    <FormField
                      key={decoration.id}
                      control={form.control}
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

          <FormField
            control={form.control}
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
                      <SelectItem key={topper} value={topper.toLowerCase().replace(/[^a-z]/g, "")}>
                        {topper}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-cake-burgundy hover:bg-cake-rose text-white"
            size="lg"
          >
            Continue to Scheduling
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Customization;