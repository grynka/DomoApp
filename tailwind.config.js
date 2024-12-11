/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["SpaceMono", "sans-serif"],
        montserrat: ["MontserratRegular", "sans-serif"],
        montserratBold: ["MontserratBold", "sans-serif"],
        montserratMedium: ["MontserratMedium", "sans-serif"],
        montserratSemiBold: ["MontserratSemiBold", "sans-serif"],
      },
      fontSize: {
        "10px": "10px",
        "12px": "12px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "24px": "24px",
      },
    },
  },
  plugins: [],
};
