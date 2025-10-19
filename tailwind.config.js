module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6B21A8",
          50: "#F6F0FB",
          100: "#EFE5F7",
          200: "#E4CCF1",
        },
        accent: "#C084FC",
        surface: "#FFFFFF",
        muted: "#F3F4F6",
        text: "#1F2937",
        "glass-hex": "rgba(255,255,255,0.7)",
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
