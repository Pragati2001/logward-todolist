import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../components/SideMenu";
import TodoList from "./TodoList";

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    toolbar: theme.mixins.toolbar,
    marginTop: theme.spacing(6),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: theme.spacing(5),
  },
});

const MyTodoApp = ({ classes }) => {
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <TodoList />
      </main>
    </div>
  );
};

export default withStyles(styles)(MyTodoApp);
