// React Imports
import { Link, useNavigate } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const NoPageFound: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Card>
      <Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 4,
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            // gutterBottom
          >
            404: Page Not Found
          </Typography>
          <Typography
          // variant="body1"
          // gutterBottom
          >
            Sorry, but the page you're looking for is not here.
          </Typography>

          <Button
            component={Link}
            to="/"
            variant="contained"
            // color="primary"
            sx={{ mt: 2 }}
          >
            Return home
          </Button>
          <Button
            // component={Link}
            // to="/"
            variant="contained"
            // color="primary"
            sx={{ mt: 2 }}
            onClick={goBack}
          >
            Go back
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default NoPageFound;
