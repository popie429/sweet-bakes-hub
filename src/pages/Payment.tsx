import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { CreditCard, Wallet } from "lucide-react";
import { CardPaymentForm } from "@/components/payment/CardPaymentForm";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleZellePayment = () => {
    setSelectedMethod("zelle");
  };

  const handleCashAppPayment = () => {
    window.open("https://cash.app/$sydneyespinal29", "_blank");
  };

  const handlePayPalPayment = () => {
    window.open("https://www.paypal.com/signin", "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair text-center mb-8">Payment Method</h1>
      
      {!selectedMethod ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button
            onClick={() => setSelectedMethod("card")}
            className="h-32 bg-cake-burgundy hover:bg-cake-rose text-white text-xl font-bold"
          >
            <CreditCard className="mr-2 h-6 w-6" />
            Credit/Debit Card
          </Button>
          
          <Button
            onClick={handleZellePayment}
            className="h-32 bg-[#6D1ED4] hover:bg-[#8347E5] text-white text-xl font-bold"
          >
            <Wallet className="mr-2 h-6 w-6" />
            Zelle
          </Button>
          
          <Button
            onClick={handleCashAppPayment}
            className="h-32 bg-[#00D632] hover:bg-[#2EE755] text-white text-xl font-bold"
          >
            <Wallet className="mr-2 h-6 w-6" />
            Cash App
          </Button>
          
          <Button
            onClick={handlePayPalPayment}
            className="h-32 bg-[#0070BA] hover:bg-[#003087] text-white text-xl font-bold"
          >
            <Wallet className="mr-2 h-6 w-6" />
            PayPal
          </Button>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          {selectedMethod === "card" ? (
            <CardPaymentForm onBack={() => setSelectedMethod(null)} />
          ) : selectedMethod === "zelle" ? (
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Zelle Payment Instructions</h2>
              <p className="text-lg mb-4">
                Please send your payment to:
              </p>
              <p className="text-xl font-bold mb-2">(929) 698-6795</p>
              <p className="text-lg mb-4">
                Important: Include "sydneys cakes" in the payment notes.
              </p>
              <Button 
                onClick={() => setSelectedMethod(null)}
                className="bg-cake-burgundy hover:bg-cake-rose"
              >
                Back to Payment Methods
              </Button>
            </Card>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Payment;