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
      .replace(/^./, (str) => str.toUpperCase())
      .replace(/-/g, ' ');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-12">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-1/3">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={selectedCake.image}
              alt={selectedCake.name}
              className="w-full rounded-lg object-contain bg-white"
              style={{ maxHeight: '400px', width: 'auto', margin: '0 auto' }}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(selectedCake.presets).map(([key, value]) => {
              if (Array.isArray(value)) {
                return value.map((item) => (
                  <div key={`${key}-${item}`} className="flex items-center space-x-2 bg-cake-pink bg-opacity-50 p-3 rounded-md">
                    <Checkbox
                      id={`${key}-${item}`}
                      defaultChecked
                      onCheckedChange={(checked) => onPresetToggle(`${key}-${item}`, !!checked)}
                    />
                    <label htmlFor={`${key}-${item}`} className="text-gray-700">
                      {formatPresetName(item)} ({formatPresetName(key)})
                    </label>
                  </div>
                ));
              }
              if (value) {
                return (
                  <div key={key} className="flex items-center space-x-2 bg-cake-pink bg-opacity-50 p-3 rounded-md">
                    <Checkbox
                      id={key}
                      defaultChecked
                      onCheckedChange={(checked) => onPresetToggle(key, !!checked)}
                    />
                    <label htmlFor={key} className="text-gray-700">
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