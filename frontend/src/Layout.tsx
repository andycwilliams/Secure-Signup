// React Imports
import { Outlet } from "react-router-dom";
// Material UI Imports
import Container from "@mui/material/Container";
// Component Imports
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
