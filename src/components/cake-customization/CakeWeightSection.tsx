import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                {CAKE_SIZES.slice(0, 3).map((option) => (
                  <div key={option.size} className="flex items-start space-x-3 space-y-0">
                    <RadioGroupItem value={option.size} id={option.size} />
                    <div className="leading-none">
                      <Label className="text-sm font-medium leading-none" htmlFor={option.size}>
                        {option.label} +${option.price} ({option.guests} guests)
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {CAKE_SIZES.slice(3).map((option) => (
                  <div key={option.size} className="flex items-start space-x-3 space-y-0">
                    <RadioGroupItem value={option.size} id={option.size} />
                    <div className="leading-none">
                      <Label className="text-sm font-medium leading-none" htmlFor={option.size}>
                        {option.label} +${option.price} ({option.guests} guests)
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </FormControl>
          <p className="text-sm text-gray-500 mt-2">
            {t('customize.guestNote')}
          </p>
        </FormItem>
      )}
    />
  );
};