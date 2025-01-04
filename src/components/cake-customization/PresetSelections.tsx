import { HelpCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PresetSelectionsProps {
  selectedCake: {
    name: string;
    image: string;
    presets: {
      flourType: string;
      filling: string;
      frosting: string;
      decorations: string[];
      cakeTopper: string;
    };
  };
  onPresetToggle: (preset: string, value: boolean) => void;
}

export const PresetSelections = ({
  selectedCake,
  onPresetToggle,
}: PresetSelectionsProps) => {
  const formatPresetName = (name: string) => {
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-start gap-6">
        <img
          src={selectedCake.image}
          alt={selectedCake.name}
          className="w-48 h-48 object-cover rounded-md"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-playfair text-cake-burgundy">Selected Cake Presets</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-5 w-5 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    These are the default selections for your chosen cake. 
                    Uncheck any items you'd like to customize in the sections below. 
                    Additional customizations may incur extra charges.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(selectedCake.presets).map(([key, value]) => {
              if (Array.isArray(value)) {
                return value.map((item) => (
                  <div key={`${key}-${item}`} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${key}-${item}`}
                      defaultChecked
                      onCheckedChange={(checked) => onPresetToggle(`${key}-${item}`, !!checked)}
                    />
                    <label htmlFor={`${key}-${item}`}>
                      {formatPresetName(item)} ({formatPresetName(key)})
                    </label>
                  </div>
                ));
              }
              if (value) {
                return (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      id={key}
                      defaultChecked
                      onCheckedChange={(checked) => onPresetToggle(key, !!checked)}
                    />
                    <label htmlFor={key}>
                      {formatPresetName(value)} ({formatPresetName(key)})
                    </label>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};