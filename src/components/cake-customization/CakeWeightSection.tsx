import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useTranslation } from 'react-i18next';

const CAKE_SIZES = [
  { size: "5-2", label: "5\" Two layered", guests: "4-6", price: 35 },
  { size: "5-3", label: "5\" Three Layered", guests: "5-7", price: 45 },
  { size: "6-2", label: "6\" Two Layered", guests: "6-8", price: 45 },
  { size: "6-3", label: "6\" Three Layered", guests: "10-12", price: 75 },
  { size: "8-2", label: "8\" Two Layered", guests: "10-12", price: 60 },
  { size: "8-3", label: "8\" Three Layers Cake", guests: "20-24", price: 90 },
];

export const CakeWeightSection = () => {
  const { t } = useTranslation();

  return (
    <FormField
      name="cakeSize"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{t('customize.cakeSize')}</FormLabel>
          <FormControl>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {CAKE_SIZES.slice(0, 3).map((option) => (
                  <div key={option.size} className="flex items-start space-x-3 space-y-0">
                    <Checkbox
                      checked={field.value?.includes(option.size)}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || [];
                        if (checked) {
                          field.onChange([...currentValue, option.size]);
                        } else {
                          field.onChange(currentValue.filter((value: string) => value !== option.size));
                        }
                      }}
                    />
                    <div className="leading-none">
                      <Label className="text-sm font-medium leading-none">
                        {t(`customize.options.cakeSizes.${option.size}.label`)} +${option.price} ({t(`customize.options.cakeSizes.${option.size}.servings`)})
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {CAKE_SIZES.slice(3).map((option) => (
                  <div key={option.size} className="flex items-start space-x-3 space-y-0">
                    <Checkbox
                      checked={field.value?.includes(option.size)}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || [];
                        if (checked) {
                          field.onChange([...currentValue, option.size]);
                        } else {
                          field.onChange(currentValue.filter((value: string) => value !== option.size));
                        }
                      }}
                    />
                    <div className="leading-none">
                      <Label className="text-sm font-medium leading-none">
                        {t(`customize.options.cakeSizes.${option.size}.label`)} +${option.price} ({t(`customize.options.cakeSizes.${option.size}.servings`)})
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FormControl>
          <p className="text-sm text-gray-500 mt-2">
            {t('customize.guestNote')}
          </p>
        </FormItem>
      )}
    />
  );
};