/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
// import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
// Context Imports
import AuthContext from "../context/AuthProvider";
// Axios Imports
import axios from "axios";

export const Home: React.FC = () => {
  const { setAuth } = useContext(AuthContext) as any;
  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
    navigate("/linkpage");
  };

  return (
    <Card>
      <Typography>Home</Typography>

      <Typography>You are logged in!</Typography>

      <Button
        component={Link}
        to="/lounge"
        variant="contained"
        // color="primary"
        // sx={{ mt: 2 }}
      >
        Go to the Lounge
      </Button>
      <Button
        component={Link}
        to="/editor"
        variant="contained"
        // color="primary"
        // sx={{ mt: 2 }}
      >
        Go to the Editor page
      </Button>
      <Button
        component={Link}
        to="/admin"
        variant="contained"
        // color="primary"
        // sx={{ mt: 2 }}
      >
        Go to the Admin page
      </Button>
      <Button
        component={Link}
        to="/linkpage"
        variant="contained"
        // color="primary"
        // sx={{ mt: 2 }}
      >
        Go to the link page
      </Button>

      <Button component={Link} to="/" variant="contained">
        Log Out
      </Button>
    </Card>
  );
};

export default Home;
