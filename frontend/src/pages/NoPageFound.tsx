// import React from "react";
import { Link } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NoPageFound: React.FC = () => {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, but the page you're looking for is not here.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Return home
      </Button>
    </Box>
  );
};

export default NoPageFound;
