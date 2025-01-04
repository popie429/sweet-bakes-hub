import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const PresetSelections = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCake = location.state?.selectedCake;

  if (!selectedCake) {
    return <div>No cake selected</div>;
  }

  const handleContinue = () => {
    navigate('/customize', { state: { selectedCake } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair font-bold text-cake-burgundy mb-8 text-center">
        Customize Your Cake
      </h1>
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
            <h2 className="text-2xl font-playfair font-semibold mb-2">{selectedCake.name}</h2>
            <p className="text-gray-600 mb-4">{selectedCake.description}</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Cake Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-semibold">${selectedCake.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Servings</p>
                    <p className="font-semibold">{selectedCake.servings} guests</p>
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-3">Preset Selections</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm text-gray-500">Flour Type</Label>
                    <RadioGroup defaultValue={selectedCake.presets.flourType}>
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
                    <RadioGroup defaultValue={selectedCake.presets.filling}>
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
                    <RadioGroup defaultValue={selectedCake.presets.frosting}>
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
              </div>
            </div>
            <div className="mt-8">
              <Button
                className="w-full bg-cake-burgundy hover:bg-cake-rose text-white"
                onClick={handleContinue}
              >
                Continue to Customization
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresetSelections;