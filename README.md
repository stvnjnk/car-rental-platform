# Car Rental Platform

**Modern car rental platform built with Next.js, TypeScript, and Tailwind CSS, showcasing responsive design, internationalization, and performance optimization for modern web development.**

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Performance Optimizations](#performance-optimizations)
- [Internationalization](#internationalization)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project is a **full-featured car rental platform** that demonstrates modern web development practices using Next.js 15, TypeScript, and Tailwind CSS. It showcases responsive design, internationalization (English/Albanian), performance optimization techniques, and modern React patterns.

The platform includes a complete car fleet management system, interactive modals, form handling, and a mobile-first responsive design. Built as a portfolio piece to demonstrate proficiency in modern frontend technologies and best practices.

---

## Features

- **🚗 Interactive Car Fleet:** Browse detailed car information with specifications, images, and pricing
- **🌍 Bilingual Support:** Complete internationalization with English and Albanian languages
- **📱 Responsive Design:** Mobile-first approach with seamless experience across all devices
- **⚡ Performance Optimized:** Image optimization, lazy loading, and efficient bundle management
- **🎨 Modern UI/UX:** Clean, professional design using shadcn/ui components
- **📝 Contact Forms:** Interactive contact forms with validation and submission handling
- **💬 WhatsApp Integration:** Direct customer communication through WhatsApp widget
- **🔍 SEO Optimized:** Comprehensive meta tags, structured data, and sitemap generation
- **🎯 TypeScript:** Full type safety throughout the application
- **🌟 Accessibility:** WCAG compliant with proper ARIA labels and keyboard navigation

---

## Technologies Used

### **Core Framework**
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Static type checking and enhanced developer experience

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icon library

### **Development Tools**
- **ESLint** - Code linting and style enforcement
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

### **Performance & Optimization**
- **Next.js Image** - Optimized image loading and delivery
- **Font Optimization** - Inter font with display swap
- **Bundle Optimization** - Tree shaking and code splitting

---

## Project Structure

```
car-rental-platform/
├── app/                    # Next.js App Router
│   ├── components/         # App-specific components
│   │   ├── car-modal.tsx
│   │   ├── language-switcher.tsx
│   │   └── whatsapp-widget.tsx
│   ├── contexts/          # React Context providers
│   │   └── language-context.tsx
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Homepage component
│   └── sitemap.ts        # Dynamic sitemap generation
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
│   ├── cloudinary.ts     # Image handling utilities
│   └── utils.ts          # General utilities
├── public/               # Static assets
│   ├── images/           # Local images for demo
│   └── manifest.json     # PWA manifest
├── styles/               # Additional styles
├── hooks/                # Custom React hooks
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

---

## Installation

To set up and run the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/stvnjnk/car-rental-platform.git
   cd car-rental-platform
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

5. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```

---

## Usage

### **Development Commands**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically

### **Key Features Demo**
1. **Browse Fleet:** Click on any car to view detailed specifications
2. **Language Toggle:** Use the language switcher to test internationalization
3. **Contact Form:** Fill out the contact form to see form handling
4. **WhatsApp:** Click the WhatsApp widget for direct communication
5. **Responsive Design:** Test on different screen sizes

---

## Performance Optimizations

- **Image Optimization:** Custom image component with lazy loading and responsive sizing
- **Font Loading:** Optimized font loading with `display: swap` and preloading
- **Bundle Splitting:** Automatic code splitting with Next.js
- **CSS Optimization:** Tailwind CSS purging and PostCSS optimization
- **SEO Enhancement:** Comprehensive meta tags, Open Graph, and structured data
- **Lighthouse Score:** Optimized for high Lighthouse performance scores

---

## Internationalization

The platform supports English and Albanian languages with:
- **Context-based translation system** using React Context
- **Persistent language selection** with localStorage
- **Complete UI translation** covering all user-facing text
- **SEO-friendly language handling** with proper hreflang tags

Language files are located in `app/contexts/language-context.tsx` with easy expansion for additional languages.

---

## Contributing

Contributions are welcome! This project serves as a demonstration of modern web development practices. Feel free to:

- Submit bug reports or feature requests
- Propose improvements to code structure or performance
- Add new features or components
- Improve documentation

Please ensure all contributions maintain the existing code quality and follow TypeScript best practices.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

**Built with ❤️ by [Stiven Janku](https://github.com/stvnjnk)**
