import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { loadImage, removeBackground } from '@/utils/imageUtils';

export const HeroSection = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    const processImage = async () => {
      try {
        const response = await fetch("/lovable-uploads/4c978480-815d-4d3f-b4dc-9e7d95562427.png");
        const blob = await response.blob();
        const img = await loadImage(blob);
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error("Error processing image:", error);
        toast({
          title: "Error",
          description: "Failed to process image. Using original image instead.",
          variant: "destructive",
        });
      }
    };

    processImage();

    return () => {
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 pt-8 pb-16 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <h1 className="font-seasons text-6xl md:text-7xl text-cake-rose mb-4">
            The Best
          </h1>
          <h2 className="font-seasons text-3xl md:text-4xl text-cake-rose mb-8">
            for your big day
          </h2>
          <Link to="/customize">
            <Button
              size="lg"
              className="bg-cake-rose hover:bg-cake-rose/90 text-white font-montserrat px-8 py-6 text-xl rounded-full"
            >
              order now!
            </Button>
          </Link>
          
          <div className="mt-8 text-cake-rose">
            <p className="font-montserrat">
              <a href="tel:+19296986795" className="hover:underline">(929) 698 6795</a>
            </p>
            <p className="font-montserrat">Albany, NY</p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="transition-transform duration-300">
            <img
              src={processedImageUrl || "/lovable-uploads/4c978480-815d-4d3f-b4dc-9e7d95562427.png"}
              alt="Grid of Sydney's Cakes"
              className="w-full h-auto object-contain max-w-full"
              style={{ 
                backgroundColor: 'transparent',
                mixBlendMode: 'multiply'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};