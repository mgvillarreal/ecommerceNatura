/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Popins', 'sans-serif']
      },
      colors: {
        rosa: "#B44663",
        rosaPastel: "#E9DCE4",
        rosaMedio: "#CE9EB3",
        lila: "#C4ADD8",
        bordo: "#330911",
      }
    },
  },
  plugins: [],
}

