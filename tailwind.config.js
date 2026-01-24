/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "ivory": "#C1AE9F",
        "ivory-2": "#E6DED8",
        "merah-2": "#861812",
        "merah": "#531C19",
        "hijau": "#0D4C29",
        "hijau-2": "#158E4B",
      },

      animation: {
        scroll: "scroll 40s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
