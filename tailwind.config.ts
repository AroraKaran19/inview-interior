import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': {
        'max': '320px' // Extra small devices (phones)
      },
      // => @media (max-width: 320px) { ... }
      'sm': {
        'min': '0px',
        'max': '768px' // Small devices (phones to tablets)
      },
      // => @media (min-width: 321px) and (max-width: 768px) { ... }
      'md': {
        'min': '769px',
        'max': '1024px' // Medium devices (tablets to small desktops)
      },
      // => @media (min-width: 769px) and (max-width: 1024px) { ... }
      'lg': {
        'min': '1025px',
        'max': '1440px' // Large devices (desktops)
      },
      // => @media (min-width: 1025px) and (max-width: 1440px) { ... }
      'xl': {
        'min': '1441px' // Extra large devices (large desktops)
      }
      // => @media (min-width: 1441px) { ... }
    },
    extend: {
      keyframes: {
        jumpUpDown: {
          "0%, 100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "50%": {
            opacity: "1",
            transform: "translateY(-10px)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        jumpUpDown: "jumpUpDown 1s ease-in-out infinite",
        fadeIn: "fadeIn 1s 2.5s ease-in-out forwards",
      },
      backgroundImage: {
        'banner-1': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url('/HomeThirdSection1.jpg');",
      },
    },
  },
  plugins: [],
};
export default config;
