// React Imports
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// Hooks Imports
import useAuth from "../hooks/useAuth";
import useInput from "../hooks/useInput";
import useToggle from "../hooks/useToggle";
// Axios Imports
import axios from "../api/axios";

const LOGIN_URL = "/auth";

const SignIn: React.FC = () => {
  // TODO: Replace below quick fix ("as any") with actual solution
  const { setAuth } = useAuth() as any;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef<HTMLParagraphElement>(null);

  const [username, resetUser, userAttributes] = useInput("user", "");
  // const [username, setUsername] = useState("TestNewAccountAlsoAnAdmin");
  const [password, setPassword] = useState("TestAccount#12345@");
  const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);
  const [check, toggleCheck] = useToggle("persist", false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  // const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // setUsername(e.target.value);
  // };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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
      // const roles = response?.data?.roles;
      // setAuth({ username, password, roles, accessToken }); // Do we really need all of these in the state? We need roles and accessToken, the user is handy, but the password is not necessary to store there. Nor are the roles
      setAuth({ username, accessToken });
      resetUser();
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
      <Stack>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",

            gap: 2,
            padding: 4,
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <FormControl fullWidth>
            <TextField
              id="username"
              name="username"
              label="Username"
              placeholder="Enter your username..."
              variant="outlined"
              {...userAttributes}
              required
              autoComplete="username"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password..."
              variant="outlined"
              value={password}
              onChange={handlePassword}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              onChange={toggleCheck}
              checked={check}
              label="Trust this device"
            />
          </FormGroup>
          <Typography sx={{ color: "text.secondary" }}>
            Don't have an account? <Link href="/signup">Create one</Link>
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default SignIn;
