/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        ochre: {
          '50':  '#fcfaf7',
          '100': '#f9efd5',
          '200': '#f3d8aa',
          '300': '#c1a284',
          '400': '#cf8549',
          '500': '#b6632b',
          '600': '#99491c',
          '700': '#753717',
          '800': '#512612',
          '900': '#34180c',
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
