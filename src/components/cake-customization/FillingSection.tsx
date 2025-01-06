import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from 'react-i18next';

const fillingOptions = [
  { id: "vanilla", label: "options.fillings.vanillaCustard", price: 0 },
  { id: "chocolate", label: "options.fillings.chocolateGanache", price: 10 },
  { id: "strawberry", label: "options.fillings.strawberry", price: 12 },
  { id: "lemon", label: "options.fillings.lemonCurd", price: 10 },
  { id: "pineapple", label: "options.fillings.pineapple", price: 0 },
  { id: "peach", label: "options.fillings.peach", price: 0 }
];

export const FillingSection = () => {
  const { t } = useTranslation();

  return (
    <FormField
      name="filling"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">{t('customize.filling')}</FormLabel>
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
                        {t(filling.label)}{filling.price > 0 ? ` ($${filling.price})` : ''}
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