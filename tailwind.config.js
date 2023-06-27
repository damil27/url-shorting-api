module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_primary_cyan: "hsl(180, 66%, 49%)",
        custom_primary_dark: "hsl(257, 27%, 26%)",
        custom_secondary_red: "hsl(0, 87%, 67%)",
        custom_gray: "hsl(0, 0%, 75%)",
        custom_violet: "hsl(257, 7%, 63%)",
        custom_dark_blue: "hsl(255, 11%, 22%)",
        custom_dark_violet: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: ["poppins", "sans serif"],
      },
    },
  },
  plugins: [],
};
