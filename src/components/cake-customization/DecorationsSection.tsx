import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from 'react-i18next';

const decorationOptions = [
  { id: "stars", label: "options.decorations.stars", price: 3 },
  { id: "hearts", label: "options.decorations.hearts", price: 3 },
  { id: "sprinkles", label: "options.decorations.sprinkles", price: 2 },
  { id: "fondantPiglet", label: "options.decorations.fondantPiglet", price: 10 },
  { id: "fondantFlowers", label: "options.decorations.fondantFlowers", price: 5 },
  { id: "donJulioBottle", label: "options.decorations.donJulioBottle", price: 5 },
  { id: "goldDetails", label: "options.decorations.goldDetails", price: 8 },
  { id: "macaroons", label: "options.decorations.macaroons", price: 9 },
  { id: "freshFlowers", label: "options.decorations.freshFlowers", price: 12 },
  { id: "roses", label: "options.decorations.roses", price: 4 },
  { id: "pearls", label: "options.decorations.pearls", price: 3 },
  { id: "sunMoon", label: "options.decorations.sunMoon", price: 15 },
  { id: "chocolateStrawberries", label: "options.decorations.chocolateStrawberries", price: 3 },
];

export const DecorationsSection = () => {
  const { t } = useTranslation();

  return (
    <FormField
      name="decorations"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">{t('customize.decorations')}</FormLabel>
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
                              ? field.onChange([...(field.value || []), decoration.id])
                              : field.onChange(
                                  field.value?.filter((value) => value !== decoration.id)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {t(decoration.label)} (${decoration.price})
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