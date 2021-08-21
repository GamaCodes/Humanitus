import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#8dafe1",
      main: "#3068BA",
      dark: "#0f203a",
      contrastText: "#fff",
    },
    secondary: {
      light: "#dc7508",
      main: "#F68712",
      dark: "#dc7508",
      contrastText: "#fff",
    },
    tertiary: {
      light: "#dc7508",
      main: "#fff",
      dark: "#dc7508",
      contrastText: "#000",
    },
    background: {
      paper: "#3068BA",
    },
  },
});

export default theme;
