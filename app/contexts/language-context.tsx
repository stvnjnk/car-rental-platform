"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "sq"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isHydrated: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.whyUs": "Why Us",
    "nav.fleet": "Fleet",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.bookNow": "Book Now",

    // Hero Section
    "hero.title": "Explore Albania with",
    "hero.titleHighlight": "Premium",
    "hero.titleEnd": "Rental Cars",
    "hero.description":
      "Discover the beauty of Albania with our reliable, affordable, and modern fleet. From city adventures to mountain escapes, we've got the perfect vehicle for your journey.",
    "hero.exploreCars": "Explore Cars",
    "hero.learnMore": "Learn More",
    "hero.happyCustomers": "Happy Customers",
    "hero.support": "Support",
    "hero.vehicleModels": "Fleet of Cars",
    "hero.contact": "Contact Us",

    // Why Us Section
    "whyUs.title": "Why Choose ACRA?",
    "whyUs.subtitle":
      "We're committed to providing exceptional service and unbeatable value for your car rental needs in Albania.",
    "whyUs.pricing.title": "Competitive Pricing",
    "whyUs.pricing.description":
      "Best rates in Albania with transparent pricing and no hidden fees. Quality service at affordable prices.",
    "whyUs.selection.title": "Wide Vehicle Selection",
    "whyUs.selection.description":
      "From compact city cars to spacious SUVs, choose from our diverse fleet of well-maintained vehicles.",
    "whyUs.service.title": "24/7 Customer Service",
    "whyUs.service.description":
      "Round-the-clock support for all your needs. We're here to help whenever you need assistance.",
    "whyUs.reliability.title": "Reliability & Trust",
    "whyUs.reliability.description":
      "Dependable service with a proven track record. Your satisfaction and safety are our top priorities.",

    // Fleet Section
    "fleet.title": "Our Fleet of Cars",
    "fleet.subtitle":
      "Choose from our carefully selected range of vehicles, each maintained to the highest standards for your comfort and safety.",
    "fleet.perDay": "per day",
    "fleet.passengers": "Passengers",
    "fleet.view": "View",
    "fleet.gasoline": "Gasoline",
    "fleet.diesel": "Diesel",
    "fleet.lpg": "LPG",
    "fleet.manual": "Manual",
    "fleet.automatic": "Automatic",

    // Modal
    "modal.specifications": "Specifications",
    "modal.features": "Features",
    "modal.engine": "Engine",
    "modal.horsepower": "Horsepower",
    "modal.fuelConsumption": "Fuel Economy",
    "modal.transmission": "Transmission",
    "modal.passengers": "Passengers",
    "modal.luggage": "Luggage",
    "modal.bags": "bags",
    "modal.year": "Year",
    "modal.carType": "Type",
    "modal.inquireNow": "Inquire Now",
    "modal.close": "Close",
    "modal.airConditioning": "Air Conditioning",
    "modal.powerSteering": "Power Steering",
    "modal.electricWindows": "Electric Windows",
    "modal.centralLocking": "Central Locking",
    "modal.radioCD": "Radio/CD",
    "modal.airbags": "Airbags",

    // Car Types
    "modal.hatchback": "Hatchback",
    "modal.sedan": "Sedan",
    "modal.suv": "SUV",
    "modal.crossover": "Crossover",
    "modal.compact": "Compact",

    // Testimonials Section
    "testimonials.title": "What Our Customers Say",
    "testimonials.subtitle":
      "Don't just take our word for it. Here's what our satisfied customers have to say about their experience with ACRA.",
    "testimonials.review1":
      "Excellent service! The car was clean, well-maintained, and perfect for our Albanian adventure. The staff was incredibly helpful and professional.",
    "testimonials.customer1.name": "Maria Schmidt",
    "testimonials.customer1.title": "Tourist from Germany",
    "testimonials.review2":
              "Great prices and reliable cars. We rented a Dacia Duster for our mountain trip and it performed excellently. Will definitely use ACRA again!",
    "testimonials.customer2.name": "James Wilson",
    "testimonials.customer2.title": "Business Traveler",
    "testimonials.review3":
      "Outstanding customer service! They helped us choose the perfect car for our family vacation. The booking process was smooth and hassle-free.",
    "testimonials.customer3.name": "Elena Rossi",
    "testimonials.customer3.title": "Family Vacation",

    // Contact Section
    "contact.title": "Contact Us",
    "contact.subtitle":
      "Ready to start your Albanian adventure? Get in touch with us for bookings, inquiries, or any assistance you need.",
    "contact.getInTouch": "Get in Touch",
    "contact.sendMessage": "Send us a Message",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.email": "Email",
    "contact.phone": "Phone Number",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us about your car rental needs...",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.successMessage": "Thank you! Your message has been sent successfully. We'll get back to you soon.",
    "contact.errorMessage": "Sorry, there was an error sending your message. Please try again.",
    "contact.firstNamePlaceholder": "Your first name",
    "contact.lastNamePlaceholder": "Your last name",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.phonePlaceholder": "+355 69 123 4567",

    // Footer
    "footer.description":
      "Your trusted partner for car rentals in Albania. Explore the country with confidence and comfort.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contactInfo": "Contact Info",
    "footer.dailyRentals": "Daily Rentals",
    "footer.weeklyRentals": "Weekly Rentals",
    "footer.monthlyRentals": "Monthly Rentals",
    "footer.airportPickup": "Airport Pickup",
    "footer.copyright": "Alpet Car Rental Albania. All rights reserved.",

    // WhatsApp Widget
    "whatsapp.chatWithUs": "Chat with us",
    "whatsapp.defaultMessage": "Hi! I'm interested in car rental services. Can you help me?",
  },
  sq: {
    // Navigation
    "nav.home": "Kryefaqja",
    "nav.whyUs": "Pse Ne",
    "nav.fleet": "Flota",
    "nav.reviews": "Vlerësime",
    "nav.contact": "Kontakti",
    "nav.bookNow": "Rezervo Tani",

    // Hero Section
    "hero.title": "Eksploroni Shqipërinë me Makina",
    "hero.titleHighlight": "Premium",
    "hero.titleEnd": "me Qira",
    "hero.description":
      "Zbuloni bukurinë e Shqipërisë me flotën tonë të besueshme, të përballueshme dhe moderne. Nga aventurat në qytet deri tek arratisjet në mal, kemi automjetin e përsosur për udhëtimin tuaj.",
    "hero.exploreCars": "Eksploroni Makinat",
    "hero.learnMore": "Mëso Më Shumë",
    "hero.happyCustomers": "Klientë të Kënaqur",
    "hero.support": "Mbështetje",
    "hero.vehicleModels": "Makina",
    "hero.contact": "Na Kontaktoni",

    // Why Us Section
    "whyUs.title": "Pse të Zgjidhni Alpet Car Rental?",
    "whyUs.subtitle":
      "Jemi të përkushtuar për të ofruar shërbim të jashtëzakonshëm dhe vlerë të pamposhtur për nevojat tuaja të qirasë së makinave në Shqipëri.",
    "whyUs.pricing.title": "Çmime Konkurruese",
    "whyUs.pricing.description":
      "Tarifat më të mira në Shqipëri me çmime transparente dhe pa tarifa të fshehura. Shërbim cilësor me çmime të përballueshme.",
    "whyUs.selection.title": "Zgjedhje e Gjerë Automjetesh",
    "whyUs.selection.description":
      "Nga makinat kompakte të qytetit deri tek SUV-t e hapësirës, zgjidhni nga flota jonë e larmishme e automjeteve të mirëmbajtura.",
    "whyUs.service.title": "Shërbim Klientësh 24/7",
    "whyUs.service.description":
      "Mbështetje gjatë gjithë kohës për të gjitha nevojat tuaja. Jemi këtu për t'ju ndihmuar kurdo që keni nevojë për asistencë.",
    "whyUs.reliability.title": "Besueshmëri dhe Besim",
    "whyUs.reliability.description":
      "Shërbim i besueshëm me një rekord të provuar. Kënaqësia dhe siguria juaj janë prioritetet tona kryesore.",

    // Fleet Section
    "fleet.title": "Flota Jonë e Makinave",
    "fleet.subtitle":
      "Zgjidhni nga gama jonë e përzgjedhur me kujdes e automjeteve, secila e mirëmbajtur sipas standardeve më të larta për komforin dhe sigurinë tuaj.",
    "fleet.perDay": "në ditë",
    "fleet.passengers": "Pasagjerë",
    "fleet.view": "Shiko",
    "fleet.gasoline": "Benzinë",
    "fleet.diesel": "Naftë",
    "fleet.lpg": "LPG",
    "fleet.manual": "Manuale",
    "fleet.automatic": "Automatike",

    // Modal
    "modal.specifications": "Specifikimet",
    "modal.features": "Karakteristikat",
    "modal.engine": "Motori",
    "modal.horsepower": "Fuqia",
    "modal.fuelConsumption": "Konsumi",
    "modal.transmission": "Transmisioni",
    "modal.passengers": "Pasagjerë",
    "modal.luggage": "Bagazhi",
    "modal.bags": "çanta",
    "modal.year": "Viti",
    "modal.carType": "Tipi",
    "modal.inquireNow": "Pyet Tani",
    "modal.close": "Mbyll",
    "modal.airConditioning": "Kondicioneri",
    "modal.powerSteering": "Drejtimi i Fuqishëm",
    "modal.electricWindows": "Xhama Elektrike",
    "modal.centralLocking": "Kyçja Qendrore",
    "modal.radioCD": "Radio/CD",
    "modal.airbags": "Jastëkët e Ajrit",

    // Car Types
    "modal.hatchback": "Hatchback",
    "modal.sedan": "Sedan",
    "modal.suv": "SUV",
    "modal.crossover": "Crossover",
    "modal.compact": "Kompakte",

    // Testimonials Section
    "testimonials.title": "Çfarë Thonë Klientët Tanë",
    "testimonials.subtitle":
      "Mos na besoni vetëm neve. Ja çfarë kanë për të thënë klientët tanë të kënaqur për përvojën e tyre me Alpet Car Rental.",
    "testimonials.review1":
      "Shërbim i shkëlqyer! Makina ishte e pastër, e mirëmbajtur dhe e përsosur për aventurën tonë shqiptare. Stafi ishte jashtëzakonisht i dobishëm dhe profesional.",
    "testimonials.customer1.name": "Maria Schmidt",
    "testimonials.customer1.title": "Turiste nga Gjermania",
    "testimonials.review2":
      "Çmime të mira dhe makina të besueshme. Morëm me qira një Dacia Duster për udhëtimin tonë në mal dhe performoi shkëlqyeshëm. Definitivisht do të përdorim Alpet përsëri!",
    "testimonials.customer2.name": "James Wilson",
    "testimonials.customer2.title": "Udhëtar Biznesi",
    "testimonials.review3":
      "Shërbim i jashtëzakonshëm ndaj klientit! Na ndihmuan të zgjidhnim makinën e përsosur për pushimet tona familjare. Procesi i rezervimit ishte i qetë dhe pa probleme.",
    "testimonials.customer3.name": "Elena Rossi",
    "testimonials.customer3.title": "Pushime Familjare",

    // Contact Section
    "contact.title": "Na Kontaktoni",
    "contact.subtitle":
      "Gati për të filluar aventurën tuaj shqiptare? Kontaktoni me ne për rezervime, pyetje ose çdo ndihmë që ju nevojitet.",
    "contact.getInTouch": "Kontaktoni",
    "contact.sendMessage": "Na Dërgoni një Mesazh",
    "contact.firstName": "Emri",
    "contact.lastName": "Mbiemri",
    "contact.email": "Email-i",
    "contact.phone": "Numri i Telefonit",
    "contact.message": "Mesazhi",
    "contact.messagePlaceholder": "Na tregoni për nevojat tuaja të qirasë së makinave...",
    "contact.send": "Dërgo Mesazhin",
    "contact.sending": "Duke dërguar...",
    "contact.successMessage": "Faleminderit! Mesazhi juaj u dërgua me sukses. Do t'ju kontaktojmë së shpejti.",
    "contact.errorMessage": "Na vjen keq, ndodhi një gabim duke dërguar mesazhin. Ju lutemi provoni përsëri.",
    "contact.firstNamePlaceholder": "Emri juaj",
    "contact.lastNamePlaceholder": "Mbiemri juaj",
    "contact.emailPlaceholder": "email.juaj@example.com",
    "contact.phonePlaceholder": "+355 69 123 4567",

    // Footer
    "footer.description":
      "Partneri juaj i besuar për qira makinash në Shqipëri. Eksploroni vendin me besim dhe komoditet.",
    "footer.quickLinks": "Lidhje të Shpejta",
    "footer.services": "Shërbimet",
    "footer.contactInfo": "Informacioni i Kontaktit",
    "footer.dailyRentals": "Qira Ditore",
    "footer.weeklyRentals": "Qira Javore",
    "footer.monthlyRentals": "Qira Mujore",
    "footer.airportPickup": "Marrje nga Aeroporti",
    "footer.copyright": "Alpet Car Rental Albania. Të gjitha të drejtat e rezervuara.",

    // WhatsApp Widget
    "whatsapp.chatWithUs": "Bisedoni me ne",
    "whatsapp.defaultMessage": "Përshëndetje! Jam i interesuar për shërbimet e qirasë së makinave. Mund të më ndihmoni?",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "sq")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isHydrated }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
