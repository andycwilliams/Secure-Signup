/* eslint-disable @typescript-eslint/no-unused-vars */
// React Imports
import React, { useContext, useEffect, useRef, useState } from "react";
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
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
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
//
import AuthContext from "../context/AuthProvider";

const SignIn: React.FC = () => {
  // TODO: Replace below quick fix with actual solution
  const { setAuth } = useContext(AuthContext) as any;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const userRef = useRef<HTMLParagraphElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    userRef.current?.focus(); // Focus the input field on mount
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
  };

  return (
    <Card variant="outlined">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
        {/* <Typography variant="h5">Welcome back!</Typography> */}
        {/* <Typography variant="subtitle1">Please sign in:</Typography> */}
        {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={12}> */}
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            required
            autoComplete="username"
          />
          {/* </Grid> */}
          {/* <Grid item xs={12}> */}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={handlePassword}
            required
          />
          {/* </Grid> */}
          {/* <Grid item xs={12}> */}
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
        {/* </Grid> */}
        {/* </Grid> */}
        <Button>I want to create an account</Button>
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
        </section>
      </Box>
    </Card>
  );
};

export default SignIn;
