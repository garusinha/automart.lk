module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure this path matches your project structure
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite", // Custom animation
        "fade-in": "fadeIn 1.5s ease-in-out", // Fade-in animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
