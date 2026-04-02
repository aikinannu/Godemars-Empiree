/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust based on your project structure
  ],
  theme: {
    extend: {
      // 🎨 Brand Colors
      colors: {
        primary: "#0F172A",   // Dark navy
        secondary: "#1E293B", // Slightly lighter navy
        accent: "#3B82F6",    // Blue accent
        light: "#F8FAFC",     // Off-white background
        muted: "#64748B",     // Muted text (grayish)
      },

      // 🖋 Fonts
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Global font
      },

      // 🔠 Font Sizes (Design System)
      fontSize: {
        sm: "0.875rem",    // 14px - captions, fine print
        base: "1rem",      // 16px - body
        md: "1.125rem",    // 18px - large paragraphs
        lg: "1.25rem",     // 20px - card titles, navbar brand, section headers
        xl: "1.375rem",    // 22px - small headings / subheaders
        "2xl": "1.625rem", // 26px - main page headings
        "3xl": "1.875rem", // 30px - hero banners
        "4xl": "2.25rem",  // 36px - rare big headlines
      },

      // 📏 Spacing Tokens
      spacing: {
        section: "5rem", // Standard section padding (80px)
      },

      // 🌀 Border Radius
      borderRadius: {
        xl: "1rem",      // 16px
        "2xl": "1.5rem", // 24px
      },

      // ⚡ Transition Durations
      transitionDuration: {
        DEFAULT: "300ms", // All animations default to 0.3s
      },

      // ✨ Shadows
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",   // Subtle shadow
        card: "0 8px 20px rgba(0,0,0,0.1)",    // For cards
      },
    },
  },
  plugins: [],
};