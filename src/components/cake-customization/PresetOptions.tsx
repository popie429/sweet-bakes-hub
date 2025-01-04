import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PresetOptionsProps {
  flourType: string;
  filling: string;
  frosting: string;
}

export const PresetOptions = ({ flourType, filling, frosting }: PresetOptionsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-sm text-gray-500">Flour Type</Label>
        <RadioGroup defaultValue={flourType}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vanilla" id="vanilla" />
            <Label htmlFor="vanilla">Vanilla</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="chocolate" id="chocolate" />
            <Label htmlFor="chocolate">Chocolate</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Label className="text-sm text-gray-500">Filling</Label>
        <RadioGroup defaultValue={filling}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vanilla" id="filling-vanilla" />
            <Label htmlFor="filling-vanilla">Vanilla</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="chocolate" id="filling-chocolate" />
            <Label htmlFor="filling-chocolate">Chocolate</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Label className="text-sm text-gray-500">Frosting</Label>
        <RadioGroup defaultValue={frosting}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="buttercream" id="buttercream" />
            <Label htmlFor="buttercream">Buttercream</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fondant" id="fondant" />
            <Label htmlFor="fondant">Fondant</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};