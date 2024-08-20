/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
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

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Box>
      <Box>
        {!isLoggedIn ? (
          <>
            <Typography>You need to log in to discover the truth</Typography>
            <Button variant="contained">Return home</Button>
          </>
        ) : (
          <>
            <Typography>
              You've successfully logged in! Here are all of our secrets...
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rerum
              quos odit similique earum quaerat aut quo ad libero provident
              repudiandae dolore placeat molestiae minus ab dolorem explicabo
              aliquam, et eius ipsam dignissimos voluptatum. Suscipit neque ipsa
              recusandae, soluta maxime eius illo qui nesciunt delectus amet nam
              sit atque, sint excepturi! Voluptates tempora maxime dicta ea
              tempore temporibus! Nisi, illum voluptatibus saepe assumenda
              corporis, maxime iusto nesciunt, ipsam nam nostrum quae
              consequatur tempora illo enim facere exercitationem perspiciatis
              modi temporibus facilis aspernatur hic iste! Tenetur deleniti
              consequuntur rerum eius ipsum minima sed, vel cumque amet
              explicabo beatae quod unde eligendi!
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default LoggedIn;
