import { createTheme} from "@mui/material/styles";

const theme = {
  palette: {
    background: {
      main: "#fff",
      primary:"#00367A",
      secondary: "#F0F3FA",
    },
    primary: {
      main: "#EE8603",
      contrastText: "white",
    },
    text: { main: "#001229",white:"#fff", error: "#bd1e1e" },
    secondary: {
      light: "#0A4DA1",
      main: "#00367A",
      dark: "#001229",
    },
    card: {
      main: "#F4F8FE",
      orange:"#EE8603",
      maroon:"#851717",
      navy:"#00367A"
    },
    typography: {
      fontFamily: ["Noto Sans Sc", "arial", "sans-serif"],
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    },
  },
};

export const customTheme = createTheme(theme);
