import { Facebook, Instagram, MessageCircle, PhoneCall } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-8">
      <a
        href="https://instagram.com/_sydneyscakes"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cake-rose hover:text-cake-rose/80 transition-colors"
      >
        <Instagram size={32} />
      </a>
      <a
        href="https://m.facebook.com/sydneylovestoparty/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cake-rose hover:text-cake-rose/80 transition-colors"
      >
        <Facebook size={32} />
      </a>
      <a
        href="https://wa.me/19296986795"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cake-rose hover:text-cake-rose/80 transition-colors"
      >
        <MessageCircle size={32} />
      </a>
      <a
        href="tel:+19296986795"
        className="text-cake-rose hover:text-cake-rose/80 transition-colors"
      >
        <PhoneCall size={32} />
      </a>
    </div>
  );
};