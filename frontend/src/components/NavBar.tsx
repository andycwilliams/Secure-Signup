import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Secure Signup</Typography>
        <Typography variant="subtitle1">Home</Typography>
        <Typography variant="subtitle1">About</Typography>
        <Typography variant="subtitle1">Contact</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
