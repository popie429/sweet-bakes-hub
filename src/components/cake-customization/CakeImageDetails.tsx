import { Card } from "@/components/ui/card";

interface CakeImageDetailsProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

export const CakeImageDetails = ({ image, name, description, price }: CakeImageDetailsProps) => {
  return (
    <div className="w-full md:w-1/3">
      <div className="bg-white p-4 rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full rounded-lg object-contain bg-white"
          style={{ maxHeight: '400px', width: 'auto', margin: '0 auto' }}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-playfair font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div>
          <p className="text-sm text-gray-500">Base Price</p>
          <p className="font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
};