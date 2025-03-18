// React Imports
import { Link } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const LinkPage = () => {
  return (
    <Card variant="outlined">
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
            Links
          </Typography>
          <Typography component="h2" variant="h5">
            Public
          </Typography>

          <Button component={Link} to="/signin" variant="outlined" fullWidth>
            Sign In
          </Button>
          <Button component={Link} to="/signup" variant="outlined" fullWidth>
            Sign Up
          </Button>

          <Typography component="h2" variant="h5">
            Private
          </Typography>
          <Button component={Link} to="/" variant="outlined" fullWidth>
            Home
          </Button>
          <Button component={Link} to="/editors" variant="outlined" fullWidth>
            Editors Page
          </Button>
          <Button component={Link} to="/admin" variant="outlined" fullWidth>
            Admin Page
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default LinkPage;
