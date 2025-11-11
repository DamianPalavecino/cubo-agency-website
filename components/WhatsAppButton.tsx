import { RiWhatsappLine } from "react-icons/ri";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/541234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_16px_rgba(37,211,102,0.4)] hover:bg-[#20BA5A] transition-all duration-200"
      aria-label="Contáctanos por WhatsApp"
    >
      <RiWhatsappLine size={28} className="text-white" />
    </a>
  );
}
