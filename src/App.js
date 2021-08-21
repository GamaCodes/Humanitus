import "./App.css";
import Home from "./pages/Home";
import theme from "./Theme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
