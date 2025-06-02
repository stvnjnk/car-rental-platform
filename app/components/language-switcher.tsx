"use client"

import { useLanguage } from "../contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage, isHydrated } = useLanguage()

  // Use static classes until hydrated to prevent hydration mismatch
  const flagClasses = isHydrated 
    ? "w-9 h-6 sm:w-12 sm:h-8 rounded-sm block object-cover"
    : "w-12 h-8 rounded-sm block object-cover"
  
  const containerClasses = isHydrated
    ? "flex items-center space-x-2 sm:space-x-3"
    : "flex items-center space-x-3"

  return (
    <div className={containerClasses}>
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-sm transition-all duration-200 hover:opacity-80 ${
          language === "en" ? "ring-2 ring-blue-500" : ""
        }`}
      >
        <img
          src="https://flagcdn.com/w80/gb.png"
          alt="English"
          className={flagClasses}
        />
      </button>
      <button
        onClick={() => setLanguage("sq")}
        className={`rounded-sm transition-all duration-200 hover:opacity-80 ${
          language === "sq" ? "ring-2 ring-blue-500" : ""
        }`}
      >
        <img
          src="https://flagcdn.com/w80/al.png"
          alt="Albanian"
          className={flagClasses}
        />
      </button>
    </div>
  )
}
