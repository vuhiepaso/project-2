module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://wallpaperaccess.com/full/5280759.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}