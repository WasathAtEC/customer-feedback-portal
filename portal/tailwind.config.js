/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js", 
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./public/**/*.html", 
  ],
  
  theme: {
   extend: {
  
    backgroundColor:{
      'custom-blue': '#00B1FC', 
      'custom-green' :'#00CD93',
      'custom-pressed-green':'#009B6F',
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("daisyui"),
  ],

  daisyui: {
    themes: ["light"],
   },

}
