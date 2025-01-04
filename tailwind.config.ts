import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Young Serif"],
        sans: ["Outfit"]
      },
      colors: {
        "stone-100": "hsl(30, 54%, 90%)",
        "stone-150": "hsl(30, 18%, 87%)",
        "stone-600": "hsl(30, 10%, 34%)",
        "stone-900": "hsl(24, 5%, 18%)",
        "brown-900": "hsl(14, 8%, 36%)",
        "brown-800": "hsl(14, 45%, 36%)",
        "brown-200": "hsl(14, 75%, 36%)",
        "rose-800": "hsl(332, 51%, 32%)",
        "rose-50": "hsl(330, 100%, 98%)",
        "rose-200": "hsl(330, 52%, 90%)",
        "violet-50": "hsl(323, 100%, 98%)",
        "sand-200": "hsl(29, 53%, 90%)"
      },
      fontSize: {
        base: "16px"
      },
      screens: {
        desktop: '1440px',
        mobile: '350px'
      }
    }
  }
} satisfies Config;
