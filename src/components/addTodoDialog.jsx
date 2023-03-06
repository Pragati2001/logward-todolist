import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const AddTodoDialog = (props) => {
  const handleDialogOpen = () => {
    props.handleDialogOpen();
  };

  const handleDialogClose = () => {
    props.handleDialogClose();
  };

  const handleTextfeildChange = (name) => (event) => {
    props.handleTextfeildChange(name, event.target.value);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleDialogClose}
        aria-labelledby="todo-dialog-title"
      >
        <DialogTitle id="todo-dialog-title">{"Add New To-Do Item"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="todo"
            label="To-do"
            type="text"
            value={props.todoText}
            error={props.todoError}
            onChange={handleTextfeildChange("todoText")}
            fullWidth
          />
          <TextField
            margin="dense"
            id="category"
            label="Category"
            type="text"
            value={props.category}
            error={props.categoryError}
            onChange={handleTextfeildChange("category")}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogClose}
            classes={{ label: "cancelButton" }}
          >
            Cancel
          </Button>
          <Button
            onClick={props.addNewTodoItem}
            classes={{ label: "addButton" }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTodoDialog;
