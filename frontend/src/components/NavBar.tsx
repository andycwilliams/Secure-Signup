/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
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

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const Navbar: React.FC = () => {
  return (
    <Box
    // sx={{ flexGrow: 1 }}
    // sx={{ display: "flex" }}
    >
      <AppBar position="static" component="nav">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Secure Signup
          </Typography>
          <Button component={ReactRouterLink} to="/" color="inherit">
            Home
          </Button>
          <Button component={ReactRouterLink} to="/admin" color="inherit">
            Admin
          </Button>
          <Button component={ReactRouterLink} to="/editors" color="inherit">
            Editor
          </Button>
          <Button component={ReactRouterLink} to="/linkpage" color="inherit">
            LinkPage
          </Button>
          <Button component={ReactRouterLink} to="/lounge" color="inherit">
            Lounge
          </Button>
          <Button component={ReactRouterLink} to="/signin" color="inherit">
            Sign In
          </Button>
          <Button component={ReactRouterLink} to="/signup" color="inherit">
            Sign Up
          </Button>
          <Button
            component={ReactRouterLink}
            to="/badroute"
            color="inherit"
            // disabled
          >
            404
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
