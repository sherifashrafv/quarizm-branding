/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "820px",
          lg: "1000px",
          xl: "1240px",
          "2xl": "1500px",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
