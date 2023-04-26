/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#F4496F",
      },
      textColor: {
        default: "#fffff",
      },
      letterSpacing: {
        tighter: "-0.04em",
      },
      fontSize: {
        h2: ["3.75rem", "4.5rem"],
        h4: ["2.125rem", "2.75rem"],
        h5: ["1.5rem", "2.25rem"],
        h6: ["1.25rem", "1.75rem"],
        s1: ["1rem", "1.75rem"],
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      fontFamily: {
        ichiji: ["var(--font-ichiji)"],
      },
      backgroundColor: {
        secondary: "#0E0E0E",
      },
      backgroundImage: {
        liquid: "linear-gradient(135deg, #F4496F 0%, #FFFFFF 100%)",
      },
      boxShadow: {
        circle: "inset 0px 1px 2px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
