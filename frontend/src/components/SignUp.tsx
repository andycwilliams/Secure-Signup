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
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// Axios Imports
import axios, { AxiosError } from "axios";

const validateUsername = (username: string) =>
  username.length < 5 ? "Username must have at least five characters" : "";

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(email) ? "Please enter a valid email address" : "";
};

const validatePassword = (password: string): string => {
  const errors: string[] = [];

  if (password.length < 8) {
    return "Password must have at least eight characters";
  }

  if (!/[a-z]/.test(password)) errors.push("one lowercase letter");
  if (!/[A-Z]/.test(password)) errors.push("one uppercase letter");
  if (!/\d/.test(password)) errors.push("one digit");
  if (!/[@$!%*?&]/.test(password)) errors.push("one special character");

  if (errors.length === 0) {
    return "";
  }

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
  const [isEmailInDatabase, setIsEmailInDatabase] = useState<boolean>(false);

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

  const handleIsEmailInDatabase = async () => {
    if (!formData.email) {
      return;
    }

    try {
      const encodedEmail = encodeURIComponent(formData.email);
      const response = await axios.get(
        `http://localhost:8001/users/${encodedEmail}`
      );
      console.log("User with this email was found:", response.data);
      setIsEmailInDatabase(true);
    } catch (error) {
      console.log("User not found");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usernameError = validateUsername(formData.username);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    // Can add a means here to prevent accessing this from a JS hack
    // Here's a solution from "React JS Form Validation | Axios User Registration Form Submit | Beginners to Intermediate"
    // though it does not work here:
    // const v1 = USER_REGEX.test(user);
    // const v2 = PWD_REGEX.test(pwd);
    // if (!v1 || !v2) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }

    if (usernameError || emailError || passwordError) {
      setErrors({
        username: usernameError,
        email: emailError,
        password: passwordError,
      });
      return;
    }

    // try {
    //   const emailCheckResponse = await axios.get(
    //     `http://localhost:8001/users/${encodeURIComponent(formData.email)}`
    //   );

    //   if (emailCheckResponse.data) {
    //     setErrors({
    //       username: "",
    //       email: "Email is already registered.",
    //       password: "",
    //     });
    //     return;
    //   }
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     if (error.response && error.response.status !== 404) {
    //       console.error("Error during email check:", error);
    //       // setErrors({
    //       //   username: "",
    //       //   email: "Server error, please try again.",
    //       //   password: "",
    //       // });
    //       return;
    //     }
    //   } else {
    //     console.error("Unexpected error:", error);
    //   }
    // }

    try {
      const response = await axios.post(
        "http://localhost:8001/users",
        formData
      );
      console.log("Account created successfully:", response.data);

      setFormData({ username: "", email: "", password: "" });
      setErrors({ username: "", email: "", password: "" });
    } catch (error) {
      console.error("Error during form submission:", error);
      // setErrors({
      //   username: "",
      //   email: "Server error, please try again.",
      //   password: "",
      // });
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
          Sign up
        </Typography>
        {/* <Typography variant="h4">Sign up</Typography> */}
        {/* <Typography variant="h5">Hello!</Typography> */}
        {/* <Typography variant="subtitle1">Please create an account:</Typography> */}
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <TextField
            fullWidth
            id="register-username"
            name="username"
            // label="Username"
            placeholder="ExampleUsername"
            variant="outlined"
            value={formData.username}
            onChange={handleChange}
            error={Boolean(errors.username)}
            helperText={errors.username}
            required
            autoComplete="username"
            // margin="normal"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            fullWidth
            id="register-email"
            name="email"
            // label="Email"
            placeholder="example@gmail.com"
            variant="outlined"
            value={formData.email}
            onBlur={handleIsEmailInDatabase}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            required
            autoComplete="email"
            // margin="normal"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            fullWidth
            id="register-password"
            name="password"
            // label="Password"
            placeholder="********"
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
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
        <Button>I have an account</Button>
        <Typography sx={{ textAlign: "center" }}>
          Already have an account?{" "}
          <span>
            <Link href="/signin" variant="body2" sx={{ alignSelf: "center" }}>
              Sign in
            </Link>
          </span>
        </Typography>
      </Box>
    </Card>
  );
};

export default SignUp;
