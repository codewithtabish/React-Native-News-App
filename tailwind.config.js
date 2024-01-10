/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
       light:{
         // Light theme colors
        lightBackground: '#ffffff',
        lightText: '#333333',
        lightPrimary: '#33CC66',
        // Dark theme colors
      
       },

       dark:{
        
          darkBackground: '#1a1a1a',
        darkText: '#ffffff',
        darkPrimary: '#ffffff',
   
       }
      },
    },
  },
  plugins: [],
}

