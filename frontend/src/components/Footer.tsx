// Material UI Imports
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/X";
import Typography from "@mui/material/Typography";

const Copyright = () => {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", my: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="/">
        Secure Signin
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
};

const Footer: React.FC = () => {
  return (
    <>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 4, sm: 4 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Stack direction="column" sx={{ alignItems: "center" }}>
          <Stack direction="row">
            <Link color="text.secondary" variant="body2" href="#">
              Privacy Policy
            </Link>
            <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Terms of Service
            </Link>
          </Stack>
          <Copyright />
          <Stack
            direction="row"
            spacing={1}
            sx={{
              // justifyContent: "left",
              color: "text.secondary",
            }}
          >
            <IconButton
              color="inherit"
              size="small"
              href="https://github.com/"
              aria-label="GitHub"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://x.com/"
              aria-label="X"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
