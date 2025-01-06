import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from 'react-i18next';

const frostingOptions = [
  { id: "buttercream", label: "options.frostings.buttercream", price: 0 },
  { id: "cream-cheese", label: "options.frostings.creamCheese", price: 0 },
  { id: "fondant", label: "options.frostings.fondant", price: 0 },
  { id: "whipped", label: "options.frostings.whippedCream", price: 0 },
  { id: "chocolateGanache", label: "options.frostings.chocolateGanache", price: 0 },
  { id: "vanillaFondant", label: "options.frostings.vanillaFondant", price: 0 },
  { id: "marbleFondant", label: "options.frostings.marbleFondant", price: 0 },
];

export const FrostingSection = () => {
  const { t } = useTranslation();

  return (
    <FormField
      name="frosting"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">{t('customize.frosting')}</FormLabel>
          <div className="grid grid-cols-2 gap-4">
            {frostingOptions.map((frosting) => (
              <FormField
                key={frosting.id}
                name="frosting"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={frosting.id}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value === frosting.id}
                          onCheckedChange={(checked) => {
                            field.onChange(checked ? frosting.id : null);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {t(frosting.label)}
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