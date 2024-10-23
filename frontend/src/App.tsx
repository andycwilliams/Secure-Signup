// React Imports
import { Route, Routes } from "react-router-dom";
// Material UI Imports
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
// Component Imports
import PersistLogin from "./components/PersistLogin";
import RequireAuth from "./components/RequireAuth";
// Pages Imports
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import LinkPage from "./pages/LinkPage";
import Lounge from "./pages/Lounge";
import NoPageFound from "./pages/NoPageFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// Layout Imports
import Layout from "./Layout";
// Theme Imports
import getTheme from "./theme";

const ROLES = {
  User: 101,
  Editor: 201,
  Admin: 301,
};

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={getTheme("light")}>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public routes */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/linkpage" element={<LinkPage />} />
            <Route path="/unauthorized" element={<NoPageFound />} />

            {/* Protected routes */}
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route
                element={
                  <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />
                }
              >
                <Route path="editors" element={<Editor />} />
              </Route>
              <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                <Route path="admin" element={<Admin />} />
              </Route>
              <Route
                element={
                  <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />
                }
              >
                <Route path="lounge" element={<Lounge />} />
              </Route>
            </Route>

            {/* 404 */}
            <Route path="*" element={<NoPageFound />} />
          </Route>
        </Routes>
        {/* </BrowserRouter> */}
      </ThemeProvider>
    </>
  );
};

export default App;
