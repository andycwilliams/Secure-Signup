// React Imports
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// Hooks Imports
import useLogout from "../hooks/useLogout";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/linkpage");
  };

  return (
    <Card>
      <Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 4,
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Home
          </Typography>

          <Typography component="h2">You are logged in!</Typography>

          <Button component={Link} to="/lounge" variant="outlined" fullWidth>
            Lounge
          </Button>
          <Button component={Link} to="/editors" variant="outlined" fullWidth>
            Editor page
          </Button>
          <Button component={Link} to="/admin" variant="outlined" fullWidth>
            Admin page
          </Button>
          <Button component={Link} to="/linkpage" variant="outlined" fullWidth>
            Link page
          </Button>

          <Button variant="outlined" color="error" fullWidth onClick={signOut}>
            Sign Out
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default Home;
