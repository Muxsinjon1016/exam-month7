/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        12: "12px",
        6: "6px",
      },
      backgroundColor: {
        eee: "#eeeef5",
      },
      colors: {
        b5b5c3: "#b5b5c3",
      },
      container: {
        padding: "40px",
        center: true,
      },
    },
  },
  plugins: [],
};
