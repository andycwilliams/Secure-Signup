/* eslint-disable @typescript-eslint/no-unused-vars */
// React Imports
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
// Hooks Imports
import useLogout from "../hooks/useLogout";
// Axios Imports
import axios from "axios";

export const Home: React.FC = () => {
  // const { setAuth } = useContext(AuthContext) as any;
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    // setAuth({});
    await logout();
    navigate("/linkpage");
  };

  return (
    <Card>
      <Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // width: "100%",
            gap: 2,
            padding: 4,
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Home
          </Typography>

          <Typography component="h2">You are logged in!</Typography>

          <Button component={Link} to="/lounge" variant="outlined" fullWidth>
            Lounge
          </Button>
          <Button component={Link} to="/editors" variant="outlined" fullWidth>
            Editor page
          </Button>
          <Button component={Link} to="/admin" variant="outlined" fullWidth>
            Admin page
          </Button>
          <Button component={Link} to="/linkpage" variant="outlined" fullWidth>
            Link page
          </Button>

          <Button variant="outlined" color="error" fullWidth onClick={signOut}>
            Sign Out
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default Home;
