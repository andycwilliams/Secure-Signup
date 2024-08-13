import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    if (value.length < 5) {
      setUsernameError("Username must have at least five characters");
    } else {
      setUsernameError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    const errors = [];

    if (value.length < 8) {
      errors.push("Password must have at least eight characters.");
    }

    if (!/[a-z]/.test(value)) {
      errors.push("Password must include at least one lowercase letter.");
    }

    if (!/[A-Z]/.test(value)) {
      errors.push("Password must include at least one uppercase letter.");
    }

    if (!/\d/.test(value)) {
      errors.push("Password must include at least one digit.");
    }

    if (!/[@$!%*?&]/.test(value)) {
      errors.push("Password must include at least one special character.");
    }

    setPasswordError(errors.join(" "));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.length < 5) {
      setUsernameError("Username must be at least 5 characters");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    }

    const passwordErrors = [];
    if (password.length < 8) {
      passwordErrors.push("Password must be at least 8 characters long.");
    }
    if (!/[a-z]/.test(password)) {
      passwordErrors.push("Password must include at least one lowercase letter.");
    }
    if (!/[A-Z]/.test(password)) {
      passwordErrors.push("Password must include at least one uppercase letter.");
    }
    if (!/\d/.test(password)) {
      passwordErrors.push("Password must include at least one digit.");
    }
    if (!/[@$!%*?&]/.test(password)) {
      passwordErrors.push("Password must include at least one special character (@, $, !, %, *, ?, &).");
    }

    setPasswordError(passwordErrors.join(" "));

    if (
      username.length >= 5 &&
      emailRegex.test(email) &&
      passwordErrors.length === 0
    ) {
      console.log("Submitted!", { username, email, password });
      setUsername("");
      setEmail("");
      setPassword("");
      setUsernameError("");
      setEmailError("");
      setPasswordError("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography>Hello!</Typography>
      <Typography>Please create an account:</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            error={Boolean(usernameError)}
            helperText={usernameError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            error={Boolean(emailError)}
            helperText={emailError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </Grid>
      </Grid>
      <Button>I have an account</Button>
    </Box>
  );
};

export default SignUp;
