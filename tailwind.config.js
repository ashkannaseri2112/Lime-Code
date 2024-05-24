/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: {
          350: "#84CC16",
        },
      },
      backgroundImage: {
        "homePage-Img": "url(/public/images/Home.png)",
        "join-img":"url(/public/images/Join-img.png)"
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      Poppins: "Poppins",
      PoppinsRegular: "Poppins Regular",
      PoppinsSemibold: "Poppins Semibold",
      PoppinsBold: "Poppins Bold",
      PoppinsBlack: "Poppins Black",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
