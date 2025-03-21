// React Imports
import React, { useState } from "react";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// Dependency Imports
import axios from "../api/axios";

const USERS_URL = "/users";

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
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isEmailInDatabase, setIsEmailInDatabase] = useState<boolean>(false);
  const [role, setRole] = React.useState("");
  const [formData, setFormData] = useState({
    username: "ThisIsMyUsername",
    role: 301,
    email: "test@email.com",
    password: "Abcd123@",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

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

    console.log(formData);

    // Can add a means here to prevent accessing this from a JS hack
    // Here's a solution from "React JS Form Validation | Axios User Registration Form Submit | Beginners to Intermediate"
    // though it does not work here:
    // const v1 = USER_REGEX.test(user);
    // const v2 = PWD_REGEX.test(pwd);
    // if (!v1 || !v2) {
    //   console.log("Invalid Entry");
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
      const response = await axios.post(USERS_URL, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log("Account created successfully:", response.data);
      console.log(JSON.stringify(response?.data));

      setFormData({ username: "", role: 101, email: "", password: "" });
      setErrors({ username: "", email: "", password: "" });
    } catch (err: any) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 409) {
        console.log("Username Taken");
      } else {
        console.log("Registration Failed");
      }

      // setErrors({
      //   username: "",
      //   email: "Server error, please try again.",
      //   password: "",
      // });
    }
  };

  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  return (
    <Card variant="outlined">
      <Stack>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 4,
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Sign up
          </Typography>
          <FormControl fullWidth>
            <TextField
              id="register-username"
              name="username"
              label="Username"
              placeholder="Enter a username..."
              variant="outlined"
              value={formData.username}
              onChange={handleChange}
              error={Boolean(errors.username)}
              helperText={errors.username}
              required
              autoComplete="username"
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="register-role-label">Role</InputLabel>
            <Select
              labelId="register-role-label"
              id="register-role"
              name="Role"
              label="Role"
              value={role}
              onChange={handleRoleChange}
            >
              <MenuItem value={101}>User</MenuItem>
              <MenuItem value={201}>Editor</MenuItem>
              <MenuItem value={301}>Admin</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="register-email"
              name="email"
              label="Email"
              placeholder="Enter a password..."
              variant="outlined"
              value={formData.email}
              onBlur={handleIsEmailInDatabase}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              required
              autoComplete="email"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="register-password"
              name="password"
              label="Password"
              placeholder="********"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
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
            Sign Up
          </Button>
          <Typography sx={{ color: "text.secondary" }}>
            Already have an account? <Link href="/signin">Sign in</Link>
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default SignUp;
