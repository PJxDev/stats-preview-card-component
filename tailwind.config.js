/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      
      /* (main background) */
      veryDarkBlue: "hsl(233, 47%, 7%)",
      /* (card background) */
      darkDesaturatedBlue: "hsl(244, 38%, 16%)",
      /* (accent) */
      softViolet: "hsl(277, 64%, 61%)",
      /* (main heading, stats) */
      white: "hsl(0, 0%, 100%)",
      /* (main paragraph) */
      slightlyTransparentWhite: "hsla(0, 0%, 100%, 0.75)",
      /* (stat headings) */
      slightlyTransparentWhite2: "hsla(0, 0%, 100%, 0.6)",
    
    },
    extend: {},
  },
  plugins: [],
};
