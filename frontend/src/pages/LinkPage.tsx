/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const LinkPage = () => {
  return (
    <Card
      sx={{
        // height: "100%",
        // padding: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* <Box></Box> */}
      <Typography component="h1">Links</Typography>
      <Typography component="h2">Public</Typography>
      {/* <Link to="/login">Login</Link> */}
      {/* <Link to="/register">Register</Link> */}
      <Stack>
        <Button
          component={Link}
          to="/signin"
          variant="outlined"
          // color="primary"
          // sx={{ mt: 2 }}
        >
          Sign In
        </Button>
        <Button
          component={Link}
          to="/signup"
          variant="outlined"
          // color="primary"
          // sx={{ mt: 2 }}
        >
          Sign Up
        </Button>

        <Typography component="h2">Private</Typography>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/editor">Editors Page</Link> */}
        {/* <Link to="/admin">Admin Page</Link> */}
        <Button
          component={Link}
          to="/"
          variant="outlined"
          // color="primary"
          // sx={{ mt: 2 }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/editors"
          variant="outlined"
          // color="primary"
          // sx={{ mt: 2 }}
        >
          Editors Page
        </Button>
        <Button
          component={Link}
          to="/admin"
          variant="outlined"
          // color="primary"
          // sx={{ mt: 2 }}
        >
          Admin Page
        </Button>
      </Stack>
    </Card>
  );
};

export default LinkPage;
