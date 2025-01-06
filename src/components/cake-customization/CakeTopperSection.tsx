import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from 'react-i18next';

const topperOptions = [
  { id: "happybirthday", label: "options.toppers.happyBirthday", price: 5 },
  { id: "mrandmrs", label: "options.toppers.mrAndMrs", price: 5 },
  { id: "ohbaby", label: "options.toppers.ohBaby", price: 5 },
  { id: "happyfathersday", label: "options.toppers.happyFathersDay", price: 5 },
  { id: "happymothersday", label: "options.toppers.happyMothersDay", price: 5 },
  { id: "happyvalentinesday", label: "options.toppers.happyValentinesDay", price: 5 },
];

export const CakeTopperSection = () => {
  const { t } = useTranslation();

  return (
    <FormField
      name="cakeTopper"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">{t('customize.cakeTopper')}</FormLabel>
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
                      <FormLabel className="font-normal">
                        {t(topper.label)} (${topper.price})
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