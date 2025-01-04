import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Where are you located?",
      answer: "We are based in Albany, NY, proudly serving the entire Capital Region.",
    },
    {
      question: "What are your business hours?",
      answer: "Monday to Friday: 8:00 AM - 8:00 PM\nSaturday and Sunday: 9:00 AM - 6:00 PM",
    },
    {
      question: "What types of cakes do you make?",
      answer: "We offer a wide variety of flavors including vanilla, chocolate, red velvet, carrot, lemon, marble, and more. We're always happy to discuss custom flavors to match your preferences.",
    },
    {
      question: "What cake fillings do you offer?",
      answer: "Our extensive selection includes:\n• Chocolate ganache\n• Vanilla\n• Dulce de Leche\n• Crema pastelera\n• Guava\n• Strawberry\n• Peach\n• Chocolate fudge\n• Pineapple\n• Nutella\n• Fruit cocktail\n• Crema de Almendra",
    },
    {
      question: "What types of frosting do you use?",
      answer: "We specialize in:\n• American buttercream\n• Sweet meringue\n• Italian frosting\n• Chantilly cream",
    },
    {
      question: "Do you work by appointment only?",
      answer: "Yes, we operate on an appointment-only basis. A minimum of three days' notice is required for all orders.",
    },
    {
      question: "Do you sell ready-to-go items?",
      answer: "Currently, we do not offer ready-to-go items. All our cakes are made to order.",
    },
    {
      question: "Do you operate from a storefront?",
      answer: "We operate as a home-based bakery, creating all our custom cakes from our licensed home kitchen.",
    },
    {
      question: "How can I contact you?",
      answer: "Phone: 1 (929) 698-6795\nEmail: Realsydneyescakes@gmail.com",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept:\n• Zelle\n• Cash App\n• Cash\n• Credit/Debit Cards\nPlease note that some payment methods may incur additional processing fees.",
    },
    {
      question: "Is a deposit required?",
      answer: "Yes, a 50% deposit is required to secure your order. The remaining balance is due upon receipt of your order.",
    },
    {
      question: "Do you offer delivery?",
      answer: "Delivery is available through independent drivers. The delivery fee is calculated at $1 per minute of travel time (e.g., 5 minutes = $5, 20 minutes = $20). We encourage customers to pick up their orders, as we cannot be responsible for any loss or damage that occurs during delivery.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair text-cake-burgundy text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-700 whitespace-pre-line">
                {faq.answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FAQ;