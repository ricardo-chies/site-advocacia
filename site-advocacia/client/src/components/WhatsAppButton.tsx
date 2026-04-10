import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511984708027?text=Olá! Gostaria de saber mais sobre os serviços do escritório Uriel Monteiro Nascimento Sociedade Unipessoal de Advocacia."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
      title="Envie uma mensagem no WhatsApp"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
