import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors";

const raffleleader = '#1501FE'
const white = colors.white

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: raffleleader, white,
        raffleleader: raffleleader
      },
    },
  },
  plugins: [starlightPlugin()],
};
