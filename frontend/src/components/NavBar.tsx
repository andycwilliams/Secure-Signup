// React Imports
import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
// Material UI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

const navLinks = {};

const Navbar: React.FC = () => {
  // const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAuth(event.target.checked);
  // };

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
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Secure Signup
          </Typography>
          {/* Desktop navbar */}
          {!isSmallScreen ? (
            <>
              <Button component={ReactRouterLink} to="/" color="inherit">
                Home
              </Button>
              <Button component={ReactRouterLink} to="/admin" color="inherit">
                Admin
              </Button>
              <Button component={ReactRouterLink} to="/editors" color="inherit">
                Editor
              </Button>
              <Button
                component={ReactRouterLink}
                to="/linkpage"
                color="inherit"
              >
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
            </>
          ) : (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
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
                <MenuItem onClick={handleClose}>
                  <Button component={ReactRouterLink} to="/" color="inherit">
                    Home
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button
                    component={ReactRouterLink}
                    to="/admin"
                    color="inherit"
                  >
                    Admin
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button
                    component={ReactRouterLink}
                    to="/editors"
                    color="inherit"
                  >
                    Editor
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button
                    component={ReactRouterLink}
                    to="/linkpage"
                    color="inherit"
                  >
                    LinkPage
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button
                    component={ReactRouterLink}
                    to="/lounge"
                    color="inherit"
                  >
                    Lounge
                  </Button>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <Button
                    component={ReactRouterLink}
                    to="/signin"
                    color="inherit"
                  >
                    Sign In
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button
                    component={ReactRouterLink}
                    to="/signup"
                    color="inherit"
                  >
                    Sign Up
                  </Button>
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
