"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

export default function WhatsAppWidget() {
  const { t } = useLanguage()
  
  const handleWhatsAppClick = () => {
    // Demo WhatsApp number: +1 234 567 890
    // Format: remove spaces and + for URL
    const phoneNumber = "1234567890"
    const message = encodeURIComponent(t("whatsapp.defaultMessage"))
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    
    // Open in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
        aria-label={t("whatsapp.chatWithUs")}
      >
        {/* WhatsApp Icon */}
        <div className="flex items-center justify-center">
          <MessageCircle className="h-6 w-6" />
        </div>
        
        {/* Text that appears on desktop - hidden on mobile */}
        <span className="hidden md:block text-sm font-medium whitespace-nowrap">
          {t("whatsapp.chatWithUs")}
        </span>
      </button>
    </div>
  )
} 