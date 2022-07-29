/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12 ,88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 12%, 61%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13,100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        tigersEye: '#e58c33',
        oxfordBlue: '#092a46',
        richBrilliantLavender: '#edaef2',
        deepCarrotOrange: '#ea6a2e',
        verdigris: '#4fb8b9',
        maastrichtBlue: '#001634',
        chineseBlack: '#101215',
        yellowGreen: '#32b501',
        candyAppleRed: '#ff0900'
      },
    },
  },
  plugins: [],
}

// https://www.color-name.com/hex/4fb8b9