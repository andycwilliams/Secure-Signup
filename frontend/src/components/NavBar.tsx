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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";

const Navbar: React.FC = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <ReactRouterLink
              to="/badroute"
              style={{
                textDecoration: "none",
                // color: theme.palette.primary.main,
                color: "inherit",
              }}
            >
              <MenuItem
                component={Button}
                onClick={handleClose}
                // startIcon={<ContactsIcon sx={iconSize} />}
                // sx={iconStyling}
              >
                404
              </MenuItem>
            </ReactRouterLink>
            <Divider />
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
