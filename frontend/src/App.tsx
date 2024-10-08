/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// Material UI Imports
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Home from "./pages/Home";
import LoggedIn from "./pages/LoggedIn";
// import logo from './logo.svg';
import "./App.css";
import Layout from "./Layout";
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
