import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import LoggedIn from "./pages/LoggedIn";
// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loggedin" element={<LoggedIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
