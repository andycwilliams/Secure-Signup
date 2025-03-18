// React Imports
import { Link } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Editor = () => {
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
            Editor Page
          </Typography>
          <Typography component="h2">
            You must be assigned the Editor role to view this page.
          </Typography>
          <Button component={Link} to="/" variant="outlined" fullWidth>
            Home
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default Editor;
