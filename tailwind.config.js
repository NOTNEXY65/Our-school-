/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // App router/layout me jo fonts humne inject kiye hain, unhe yahan bind kiya hai
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['"Playfair Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
