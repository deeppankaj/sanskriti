/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animation: {
      'slide-in': 'slide-in 0.5s ease-out',
      'slide-fwd': ' slide-fwd 0.45s ease-in-out ',
      'slide-up': 'slide-up 0.5s ease-out',
      'slide-down': ' slide-down 0.6s ease-in-out ',
    }
    ,
    transitionProperty: {
      height: 'height',
    },
    keyframes: {
      'slide-in': {
        '0%': {
          left:'-100vw',
        },
        '100%': {
          left:'0vw',
        },
      },

      'slide-fwd': {
        '0%': {
          left:'0vw',
        },
        '100%': {
          left:'-100vw',
        },
      },
      'slide-down': {
        '0%': {
          top:'-100vh',
        },
        '100%': {
          top:'56px',
        },
        'slide-up': {
          '0%': {
          top:'56px',
          },
          '100%': {
            top:'-100vh',
          },
        },
      },
    },
    extend: {
      colors: {
        'maincolor': '#4361ee',
        'overlay': '#00b4d8',
        'white' : 'white',
        'blackoverlay': '#1c1b1c80',
        'whiteoverlay': '#ffffffa1',
        'footercol': '#212331',
      },
    },
  },
  plugins: [],
}