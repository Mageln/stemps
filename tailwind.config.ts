import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'mobileL': '425px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#121212",
        purple: "#8977F3",
        gray: "rgb(209, 209, 209)",
        lightgray:"rgb(240, 240, 240)",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
