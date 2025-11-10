import { RiWhatsappFill } from "react-icons/ri";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/541234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <RiWhatsappFill size={28} className="text-white" />
    </a>
  );
}
