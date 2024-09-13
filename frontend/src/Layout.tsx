/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet, Route, Routes } from "react-router-dom";
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
// Component Imports
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RequireAuth from "./components/RequireAuth";
// Pages Imports
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import LinkPage from "./pages/LinkPage";
// import LoggedIn from "./pages/LoggedIn";
import Lounge from "./pages/Lounge";
import NoPageFound from "./pages/NoPageFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import "./App.css";

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>
        <main>
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
            {/* Public routes */}
            <Route path="/signup" element={<SignIn />} />
            <Route path="/signin" element={<SignUp />} />
            <Route path="/linkpage" element={<LinkPage />} />
            <Route path="/unauthorized" element={<NoPageFound />} />

            {/* Protected routes */}
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Home />} />
              <Route path="/editors" element={<Editor />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/lounge" element={<Lounge />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NoPageFound />} />
            {/* </Route> */}
          </Routes>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
