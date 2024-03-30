import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import InputForm from "./components/InputForm";
import Title from "./components/Title";
import styled from "styled-components";

function App() {
  return (
    <TodoListLayout>
      <Title />
      <InputForm type={"add"} />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </TodoListLayout>
  );
}

export default App;

const TodoListLayout = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
