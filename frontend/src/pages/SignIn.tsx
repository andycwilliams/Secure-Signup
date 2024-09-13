/* eslint-disable @typescript-eslint/no-unused-vars */
// React Imports
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Link as ReactRouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
// import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
//
// import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";
// Axios Imports
import axios from "../api/axios";

// const LOGIN_URL = "/users/login";
const LOGIN_URL = "/auth";

const SignIn: React.FC = () => {
  // TODO: Replace below quick fix ("as any") with actual solution
  const { setAuth } = useAuth() as any;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [username, setUsername] = useState("ThisIsMyUsername");
  const [password, setPassword] = useState("Abcd123@");
  const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  const userRef = useRef<HTMLParagraphElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    userRef.current?.focus();
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);

    try {
      const response = await axios.post(
        LOGIN_URL,
        { username, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ username, password, roles, accessToken });
      setUsername("");
      setPassword("");
      // setSuccess(true);
      navigate(from, { replace: true });
      // TODO: Replace below quick fix ("err: any") with actual solution
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      // errRef.current.focus();
    }
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
          {/* <FormLabel htmlFor="username">Username</FormLabel> */}
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            placeholder="Enter your username..."
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
          {/* <FormLabel htmlFor="password">Password</FormLabel> */}
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            placeholder="Enter your password..."
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
            vvvv
            {errMsg}^^^^
          </p>
        </section>
      </Box>
    </Card>
  );
};

export default SignIn;
