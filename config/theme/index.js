const theme = {
  palette: {
    primary: {// green
      900: "hsl(125, 73%, 20%)",
      700: "hsl(122, 39%, 41%)",
      500: "hsl(123, 35%, 51%)",
      300: "hsl(126, 49%, 84%)",
      100: "hsl(1125, 65%, 93%)"
    },
    grey: {
      900: "hsl(42, 15%, 13%)", // Titles
      700: "hsl(37, 11%, 28%)", // Paragraphs, ...
      600: "hsl(41, 8%, 48%)", // Disabled button text-color
      500: "hsl(41, 8%, 61%)", // Some details
      300: "hsl(40, 15%, 80%)", // Disabled button bg
      200: "hsl(40, 13%, 90%)", // Footers of modals, background of other sections...
      100: "hsl(400, 23%, 97%)" // Background
    },
    accent: {
      red: {
        900: "hsl(360, 85%, 25%)",
        700: "hsl(360, 67%, 44%)",
        500: "hsl(360, 64%, 55%)",
        300: "hsl(360, 82%, 89%)",
        100: "hsl(360, 100%, 97%)"
      },
      yellow: {
        900: "hsl(43, 77%, 27%)",
        700: "hsl(43, 78%, 60%)",
        500: "hsl(43, 89%, 70%)",
        300: "hsl(45, 90%, 88%)",
        100: "hsl(45, 100%, 96%)"
      }
    },
    social: {
      fb: "#29487d",
      ig: "#e95950",
      tw: "#55acee",
      in: "#007bb5",
      wu: "#4dc247"
    }
  },
  spacing: {
    xxs: "4px",
    xs: "8px",
    s: "12px",
    m: "16px",
    l: "24px",
    xl: "32px",
    xxl: "64px",
    giant: "96px"
  },
  box: {
    radius: {
      none: 0,
      rounded: "3px",
      pill: "500px"
    },
    shadow: [
      "0 3px 5px rgba(1,1,1,0.2)",
      "0 2px 3px rgba(1,1,1,0.4)"
    ]
  },
  font: {
    size: {
      xs: "12px",
      s: "14px",
      m: "16px",
      l: "18px",
      xl: "20px",
      xxl: "24px",
      xxxl: "32px",
      giant: "48px"
    },
    weight: {
      s: 300,
      m: 500,
      l: 700
    },
    family: {
      primary: '"Raleway", Open-sans, sans-serif',
      secondary: '"Fjalla One", sans-serif',
      serif: '"Merriweather", serif;'
    }
  }
};

export default theme;
