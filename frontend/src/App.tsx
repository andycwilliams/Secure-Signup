/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter } from "react-router-dom";
// Material UI Imports
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
// Layout Imports
import Layout from "./Layout";
// Theme Imports
import getTheme from "./theme";

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={getTheme("light")}>
        {/* <BrowserRouter> */}
        <Layout />
        {/* </BrowserRouter> */}
      </ThemeProvider>
    </>
  );
};

export default App;
