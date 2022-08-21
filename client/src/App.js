import { useMemo } from "react";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTheme } from "./context/ThemeContext";
import { ThemeProvider as ContextThemeProvider } from "./context/ThemeContext";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const initialState = {
  app: {
    gridDefaultPage: {},
  },
};

export default function App() {
  const darkMode = useTheme();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode === "dark" ? "dark" : "light",
        },
        typography: {
          fontFamily: ["Adobe Gothic std B", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
        },
      }),
    [darkMode]
  );

  return (
    <Provider store={store(initialState)}>
      <ContextThemeProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            <CssBaseline />
            {/* <Routes /> */}
          </Router>
        </ThemeProvider>
      </ContextThemeProvider>
    </Provider>
  );
}
