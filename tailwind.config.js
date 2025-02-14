/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        sencondary: "var(--secondary-color)",
        ascent: "var(--ascent-color)",
        mainRed: "var(--main-red-color)",
      },
      transitionProperty: {
        width: "width",
        height: "height",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};
