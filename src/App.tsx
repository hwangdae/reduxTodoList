import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useInput } from "./hook/useInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState, TodoType } from "./type/Type";
import uuid from "react-uuid";
import { addTodo, delTodo, switchIsdone } from "./TodoList";
import TodoList from "./components/TodoList";
import InputForm from "./components/InputForm";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Title />
      <InputForm type={"add"} />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
}

export default App;
