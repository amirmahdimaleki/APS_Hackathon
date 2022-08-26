import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import ClassHomePage from "./pages/ClassHomePage";
import CssBaseline from "@material-ui/core/CssBaseline";
import DatePicker from "./components/DatePicker"
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesContainer from "./RouterContainer";
import { useMemo } from "react";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const darkMode = useTheme();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode === "dark" ? "dark" : "light",
          aps: {
            primary: "#41B1A1",
            secondary: "#BD3A1C"
          }
        },
        typography: {
          fontFamily: ["Adobe Gothic std B", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <CssBaseline />
        <ClassHomePage />
        <RoutesContainer />
        < DatePicker/>
      </Router>
    </ThemeProvider>
  );
}
