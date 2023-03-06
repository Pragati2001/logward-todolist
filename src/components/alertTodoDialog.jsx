import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertTodoDialog = (props) => {
  const handleDialogClose = () => {
    props.handleAlertDialogClose();
    console.log("close");
  };

  return (
    <div>
      <Dialog
        open={props.alertOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to DELETE ?"}
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={handleDialogClose}
            classes={{ label: "cancelButton" }}
          >
            No
          </Button>
          <Button
            onClick={props.removeTodoItem}
            classes={{ label: "addButton" }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertTodoDialog;
