module.exports = {
  // @see https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5DD5C4",
        BoldBlack: "#212121",
        LightBlack: "#404343",
        BoldGray: "#808686",
        LightGray: "#ECEEED",
        NormalGray: "#A0A4A4",
        WhityGray: "#F7F7F7",
        LightOrange: "#FF9F4B",
      },
      fontFamily: {
        "den-light": ["Din-lighter", "Helvetica", "Arial", "sans-serif"],
        "den-bold": ["Din-bold", "Helvetica", "Arial", "sans-serif"],
        "den-normal": ["Din-regular", "Helvetica", "Arial", "sans-serif"],
      },
      fontWeight: {
        denLight: 200,
        denNormal: 400,
        denBold: 600,
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
