import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: {
          max: "320px", // Extra small devices (phones)
        },
        // => @media (max-width: 320px) { ... }
        sm: {
          max: "768px", // Small devices (phones to tablets)
        },
        // => @media (min-width: 321px) and (max-width: 768px) { ... }
        md: {
          min: "769px",
          max: "1024px", // Medium devices (tablets to small desktops)
        },
        // => @media (min-width: 769px) and (max-width: 1024px) { ... }
        lg: {
          min: "1025px",
          max: "1440px", // Large devices (desktops)
        },
        // => @media (min-width: 1025px) and (max-width: 1440px) { ... }
        xl: {
          min: "1441px", // Extra large devices (large desktops)
        },
        // => @media (min-width: 1441px) { ... }
      },
      backgroundImage: {
        'contact-hover': 'linear-gradient(#000000, #000000);',
      },
      keyframes: {
        "CardAppear": {
          '0%': { opacity: '0', transform: "translateY(-20%)" },
          '100%': { transform: "translateY(0)", opacity: "1" }
        },
        "CardAppearFromLeft": {
          '0%': { opacity: '0', transform: "translateX(-20%)" },
          '100%': { transform: "translateX(0)", opacity: "1" }
        },
      },
      animation: {
        "CardsIn": "CardAppear 0.5s ease-in-out forwards",
        "CardsInFromLeft": "CardAppearFromLeft 0.5s ease-in-out forwards",
      }
    },
  },
  plugins: [],
} satisfies Config;
