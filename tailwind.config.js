module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#effafa',
        tablet: '	#eef6f6',
        'cyan-dark': '#7b8e8e',
        'cyan-very-dark': '	#2c3a3a',
        'cyan-primary': '	#5ba4a4',
      },
      backgroundImage: (theme) => ({
        'bg-mobile': "url('../src/assets/bg-header-desktop.svg')",
        'bg-desktop': "url('../src/assets/bg-header-mobile.svg')",
      }),
    },
  },
  fontFamily: {
    Poppins: ['Spartan, sans-serif'],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
