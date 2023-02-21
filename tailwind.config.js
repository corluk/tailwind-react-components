module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    extend: {
      colors: {
        palette : {
          "001": "#000000",
          "002": "#FFFFFF", 
          "01" : "#000000" , 
          "02" : "yellow" , 
          "03" : "red" , 
          "04" : "blue" ,
          "05" : "green"
        }
      }
       
      }
     
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};