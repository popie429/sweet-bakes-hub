import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CakeWeightSection } from "./CakeWeightSection";
import { CakeImageDetails } from "./CakeImageDetails";
import { PresetOptions } from "./PresetOptions";

export const PresetSelections = () => {
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
          <CakeImageDetails
            image={selectedCake.image}
            name={selectedCake.name}
            description={selectedCake.description}
            price={selectedCake.price}
          />
          <div className="flex-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Cake Weight</h3>
                <CakeWeightSection />
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-3">Preset Selections</h3>
                <PresetOptions
                  flourType={selectedCake.presets.flourType}
                  filling={selectedCake.presets.filling}
                  frosting={selectedCake.presets.frosting}
                />
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