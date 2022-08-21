import { useMemo } from "react";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTheme } from "./context/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import RoutesContainer from "./RouterContainer";

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
    <ThemeProvider theme={theme}>
      {/* <Router> */}
      <Header />
      <CssBaseline />
      {/* <PageNotFound /> */}
      {/* <RoutesContainer /> */}
      {/* </Router> */}
    </ThemeProvider>
  );
}
