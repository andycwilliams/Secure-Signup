// React Imports
import { Link } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// Components Imports
import Users from "../components/Users";

const Admin = () => {
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
            Admin Page
          </Typography>
          <Typography component="h2">
            You must be assigned the Admin role to view this page.
          </Typography>
          <Users />
          <Button component={Link} to="/" variant="contained">
            Home
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default Admin;
