/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
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
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import InputAdornment from "@mui/material/InputAdornment";

const NoPageFound: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 10,
      }}
    >
      <Box sx={{}}>
        <Typography
          variant="h2"
          // component="h2"
          // gutterBottom
        >
          404
        </Typography>
        <Typography
        // variant="h4"
        // component="h2"
        // gutterBottom
        >
          Page Not Found
        </Typography>
        <Typography
        // variant="body1"
        // gutterBottom
        >
          Sorry, but the page you're looking for is not here.
        </Typography>
      </Box>
      <Button
        component={Link}
        to="/"
        variant="contained"
        // color="primary"
        sx={{ mt: 2 }}
      >
        Return home
      </Button>
      <Button
        // component={Link}
        // to="/"
        variant="contained"
        // color="primary"
        sx={{ mt: 2 }}
        onClick={goBack}
      >
        Go back
      </Button>
    </Box>
  );
};

export default NoPageFound;
