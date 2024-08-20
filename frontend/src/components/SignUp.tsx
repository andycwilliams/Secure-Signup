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
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const validateUsername = (username: string) =>
  username.length < 5 ? "Username must have at least five characters" : "";

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(email) ? "Please enter a valid email address" : "";
};

const validatePassword = (password: string) => {
  const errors = [];

  if (password.length < 8) {
    return "Password must have at least eight characters";
  }

  if (!/[a-z]/.test(password)) errors.push("one lowercase letter");
  if (!/[A-Z]/.test(password)) errors.push("one uppercase letter");
  if (!/\d/.test(password)) errors.push("one digit");
  if (!/[@$!%*?&]/.test(password)) errors.push("one special character");

  if (errors.length === 1) {
    return `Password must include at least ${errors[0]}.`;
  }

  if (errors.length === 2) {
    return `Password must include at least ${errors.join(" and ")}.`;
  }

  const lastRequirement = errors.pop();
  return `Password must include at least ${errors.join(
    ", "
  )}, and ${lastRequirement}.`;
};

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "ThisIsMyUsername",
    email: "test@email.com",
    password: "Abcd123@",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = "";
    switch (name) {
      case "username":
        error = validateUsername(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "password":
        error = validatePassword(value);
        break;
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usernameError = validateUsername(formData.username);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (usernameError || emailError || passwordError) {
      setErrors({
        username: usernameError,
        email: emailError,
        password: passwordError,
      });
    } else {
      console.log("Submitted!", formData);
      setFormData({ username: "", email: "", password: "" });
      setErrors({ username: "", email: "", password: "" });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4">Sign up</Typography>
      <Typography variant="h5">Hello!</Typography>
      <Typography variant="subtitle1">Please create an account:</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="register-username"
            name="username"
            label="Username"
            variant="outlined"
            value={formData.username}
            onChange={handleChange}
            error={Boolean(errors.username)}
            helperText={errors.username}
            required
            // margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="register-email"
            name="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            required
            // margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="register-password"
            name="password"
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
            required
            // margin="normal"
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
