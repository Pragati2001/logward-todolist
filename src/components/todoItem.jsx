import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import AddIcon from "@material-ui/icons/AddOutlined";
import Checkbox from "@material-ui/core/Checkbox";
import CheckCircle from "@material-ui/icons/CheckCircle";
import CheckCircleOutline from "@material-ui/icons/RadioButtonUnchecked";
import DeleteIcon from "@material-ui/icons/Delete";
import { red, green, blue, grey } from "@material-ui/core/colors";

window.id = 0;
const useStyles = makeStyles((theme) => ({
  root: {
    color: grey[600],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
  delete: {
    color: red[600],
  },
  addIcon: {
    marginLeft: "12px",
    color: blue[400],
  },
  addText: {
    color: blue[400],
  },
}));
const TodoItems = ({
  todoItems,
  handleCheckboxChange,
  removeTodoItem,
  handleDialogOpen,
}) => {
  const classes = useStyles();

  return (
    <div>
      <List>
        {todoItems.map((value) => (
          <div key={value.id}>
            <ListItem>
              <Checkbox
                checked={value.checked}
                checkedIcon={<CheckCircle />}
                icon={<CheckCircleOutline />}
                onChange={handleCheckboxChange(value)}
                value="checked"
                classes={{
                  root: classes.root,
                  checked: classes.checked,
                }}
              />
              <ListItemText
                primary={
                  value.checked ? <strike>{value.todo}</strike> : value.todo
                }
                secondary={value.category}
              />
              <ListItemSecondaryAction>
                <IconButton
                  classes={{ root: classes.delete }}
                  onClick={removeTodoItem(value)}
                  // onClick={() => props.removeTodoItem(value)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <List>
        <ListItem button onClick={handleDialogOpen}>
          <ListItemIcon>
            {<AddIcon classes={{ root: classes.addIcon }} />}
          </ListItemIcon>
          <ListItemText
            primary={"New To-do"}
            classes={{ primary: classes.addText }}
          />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default TodoItems;
