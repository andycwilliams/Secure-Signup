// React Imports
import React from "react";
// Material UI Imports
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

const Notification = () => {
  const [open, setOpen] = React.useState(false);

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
