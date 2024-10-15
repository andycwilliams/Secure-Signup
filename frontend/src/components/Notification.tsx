// React Imports
import React from // useEffect, useRef, useState
"react";
// Material UI Imports
// import Alert from "@mui/material/Alert";
// import Slide from "@mui/material/Slide";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

// const TransitionUp = (props) => <Slide {...props} direction="up" />;

const Notification = () => {
  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message="You must be signed in to perform this action."
    />
  );
};

export default Notification;
