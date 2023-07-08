/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "rgb(161, 163, 247)",
          DEFAULT: "rgb(99, 102, 241)",
        },
        neutral: {
          100: "rgb(255,255,255,0.1)",
          200: "rgb(178, 184, 205)",
          300: "rgb(174, 178, 183)",
          400: "rgb(55, 56, 62)",
          500: "rgb(48, 49, 54)",
          550: "rgb(48, 49, 54, 0.7)",
          600: "rgb(38, 39, 43)",
          650: "rgb(31, 32, 35, 0.7)",
          DEFAULT: "rgb(31, 32, 35)",
        },
      },
      fontFamily: {
        display: "Inter",
        sans: "Inter",
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1536px",
      },
    },
  },
};

