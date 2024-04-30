import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors";

const white = colors.white
const raffleleader = '#1501FE'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: white, raffleleader
      },
    },
  },
  plugins: [starlightPlugin()],
};
