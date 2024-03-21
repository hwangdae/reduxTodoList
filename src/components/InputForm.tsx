import React from "react";
import { useInput } from "../hook/useInput";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addTodo } from "../TodoList";

const InputForm = () => {
  const [inputValue, handleChange] = useInput<string>("");

  const dispatch = useDispatch();
  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      todo: inputValue,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input value={inputValue} onChange={handleChange} placeholder="할일을 적어보세요."></input>
      <button>작성하기</button>
    </form>
  );
};

export default InputForm;
