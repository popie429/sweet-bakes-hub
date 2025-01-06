import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { CakeWeightSection } from "./CakeWeightSection";
import { CakeFlavorSection } from "./CakeFlavorSection";
import { FillingSection } from "./FillingSection";
import { FrostingSection } from "./FrostingSection";
import { DecorationsSection } from "./DecorationsSection";
import { CakeTopperSection } from "./CakeTopperSection";
import { ClearSelectionsButton } from "./ClearSelectionsButton";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';

interface CustomizationFormProps {
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  total: number;
}

export const CustomizationForm = ({ form, onSubmit, total }: CustomizationFormProps) => {
  const { t } = useTranslation();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex w-full items-center justify-between p-6">
              <h2 className="text-xl font-cormorant text-cake-burgundy">{t('customize.cakeSize')}</h2>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-6">
              <CakeWeightSection />
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex w-full items-center justify-between p-6">
              <h2 className="text-xl font-cormorant text-cake-burgundy">{t('customize.baseCake')}</h2>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-6">
              <CakeFlavorSection />
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex w-full items-center justify-between p-6">
              <h2 className="text-xl font-cormorant text-cake-burgundy">{t('customize.filling')}</h2>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-6">
              <FillingSection />
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex w-full items-center justify-between p-6">
              <h2 className="text-xl font-cormorant text-cake-burgundy">{t('customize.frosting')}</h2>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-6">
              <FrostingSection />
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex w-full items-center justify-between p-6">
              <h2 className="text-xl font-cormorant text-cake-burgundy">{t('customize.decorations')}</h2>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-6">
              <DecorationsSection />
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex w-full items-center justify-between p-6">
              <h2 className="text-xl font-cormorant text-cake-burgundy">{t('customize.cakeTopper')}</h2>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-6">
              <CakeTopperSection />
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-cormorant text-cake-burgundy">{t('customize.total')}</h2>
            <span className="text-2xl font-bold text-cake-burgundy">${total}</span>
          </div>
        </div>

        <div className="space-y-4">
          <ClearSelectionsButton form={form} />
          <Button
            type="submit"
            className="w-full bg-cake-burgundy hover:bg-cake-rose text-white"
            size="lg"
          >
            {t('customize.continue')}
          </Button>
        </div>
      </form>
    </Form>
  );
};