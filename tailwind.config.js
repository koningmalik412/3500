/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-purple": "#763594",
        purple: "#51247A",
        pink: "#AB4EBA",
        blue: "#1EA4C1",
      },
      fontFamily: {
        msblack: "Montserrat-Black",
        imsblack: "Montserrat-BlackItalic",
        msbold: "Montserrat-Bold",
        imsbold: "Montserrat-BoldItalic",
        msxbold: "Montserrat-ExtraBold",
        imsxbold: "Montserrat-ExtraBoldItalic",
        msxlight: "Montserrat-ExtraLight",
        imsxlight: "Montserrat-ExtraLightItalic",
        msitalic: "Montserrat-Italic",
        mslight: "Montserrat-Light",
        imslight: "Montserrat-LightItalic",
        msmedium: "Montserrat-Medium",
        imsmedium: "Montserrat-MediumItalic",
        msregular: "Montserrat-Regular",
        mssbold: "Montserrat-SemiBold",
        imssbold: "Montserrat-SemiBoldItalic",
        msthin: "Montserrat-Thin",
        imsthin: "Montserrat-ThinItalic",
      },
    },
  },
};
