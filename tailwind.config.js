module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        accent: "#F48FB1",
        darkbg: "#0f1724",
        slateglass: "rgba(255,255,255,0.06)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
      fontFamily: {
        sans: ["Tajawal", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 400ms ease forwards",
      },
    },
  },
  plugins: [],
};
