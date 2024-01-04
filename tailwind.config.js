/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#ffdd95",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
