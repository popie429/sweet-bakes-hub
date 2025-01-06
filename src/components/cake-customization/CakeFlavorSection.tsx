import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from 'react-i18next';

const flavorOptions = [
  { id: "vanilla", label: "options.flavors.vanilla", price: 30 },
  { id: "chocolate", label: "options.flavors.chocolate", price: 35 },
  { id: "redVelvet", label: "options.flavors.redVelvet", price: 40 },
  { id: "marble", label: "options.flavors.marble", price: 45 },
];

export const CakeFlavorSection = () => {
  const { t } = useTranslation();

  return (
    <FormField
      name="flourType"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">{t('customize.baseCake')}</FormLabel>
          <div className="grid grid-cols-2 gap-4">
            {flavorOptions.map((flavor) => (
              <FormField
                key={flavor.id}
                name="flourType"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={flavor.id}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value === flavor.id}
                          onCheckedChange={(checked) => {
                            field.onChange(checked ? flavor.id : null);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {t(flavor.label)} (${flavor.price})
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