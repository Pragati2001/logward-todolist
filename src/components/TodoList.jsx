import React, { useState } from "react";
import AddTodoDialog from "../components/addTodoDialog";
import TodoItem from "../components/todoItem";
import AlertTodoDialog from "../components/alertTodoDialog";

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [todoItemValue, setTodoItemValue] = useState({});
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [todoText, setTodoText] = useState("");
  const [category, setCategory] = useState("");
  const [todoError, setTodoError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setTodoText("");
    setCategory("");
    setTodoError(false);
    setCategoryError(false);
  };

  const handleAlertDialogOpen = () => {
    setAlertOpen(true);
  };

  const handleAlertDialogClose = () => {
    setAlertOpen(false);
    setTodoItemValue({});
  };

  const handleCheckboxChange = (value) => () => {
    let newTodoItems = [...todoItems];
    newTodoItems.find((object, i) => {
      if (object.id === value.id) {
        newTodoItems[i].checked = !value.checked;
      }
      return 0;
    });
    setTodoItems(newTodoItems);
  };

  const handleTextfeildChange = (name, value) => {
    if (name === "todoText") {
      setTodoText(value);
      setTodoError(false);
    } else {
      setCategory(value);
      setCategoryError(false);
    }
  };

  const addNewTodoItem = () => {
    let newTodo = {
      id: window.id++,
      checked: false,
      todo: todoText.trim(),
      category: category.trim(),
    };
    let newTodoItems = [...todoItems];
    if (todoText.trim() === "" || category.trim() === "") {
      if (todoText.trim() === "") {
        setTodoError(true);
        return 0;
      }
      if (category.trim() === "") {
        setCategoryError(true);
        return 0;
      }
    }
    newTodoItems.push(newTodo);
    setTodoItems(newTodoItems);
    handleDialogClose();
  };

  const removeTodoItem = () => {
    let newTodoItems = [...todoItems];
    newTodoItems.splice(newTodoItems.indexOf(todoItemValue), 1);
    setTodoItems(newTodoItems);
    handleAlertDialogClose();
  };

  const alertDialogAction = (value) => () => {
    handleAlertDialogOpen();
    setTodoItemValue(value);
  };

  const addNewTodoDialogHtml = () => {
    return (
      <AddTodoDialog
        open={open}
        todoText={todoText}
        category={category}
        todoError={todoError}
        categoryError={categoryError}
        addNewTodoItem={addNewTodoItem}
        handleDialogOpen={handleDialogOpen}
        handleDialogClose={handleDialogClose}
        handleTextfeildChange={handleTextfeildChange}
      />
    );
  };

  const alertTodoDialogHtml = () => {
    return (
      <AlertTodoDialog
        alertOpen={alertOpen}
        removeTodoItem={removeTodoItem}
        handleAlertDialogClose={handleAlertDialogClose}
      />
    );
  };

  const todoListItemHtml = () => {
    return (
      <TodoItem
        todoItems={todoItems}
        handleCheckboxChange={handleCheckboxChange}
        removeTodoItem={alertDialogAction}
        handleDialogOpen={handleDialogOpen}
      />
    );
  };
  return (
    <div>
      {todoListItemHtml()}
      {addNewTodoDialogHtml()}
      {alertTodoDialogHtml()};
    </div>
  );
}
