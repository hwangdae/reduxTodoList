import React from "react";
import { useInput } from "../hook/useInput";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addTodo } from "../TodoList";
import { updateTodo } from "../redux/config/modules";

interface Props {
  type: string;
  id?: string;
  setIsEditTodo?: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputForm = ({ type, id, setIsEditTodo }: Props) => {
  const [inputValue, handleChange] = useInput<string>("");

  const dispatch = useDispatch();

  const inputHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "add") {
      return addTodoHandler();
    } else if (type === "edit") {
      return updateTodoHandler();
      
    }
  };

  const addTodoHandler = () => {
    const newTodo = {
      id: uuid(),
      todo: inputValue,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  const updateTodoHandler = () => {
    const updatedTodo = {
      id,
      inputValue,
    };
    dispatch(updateTodo(updatedTodo));

    setIsEditTodo!(false);
  };

  return (
    <form onSubmit={inputHandler}>
      <input
        value={inputValue}
        onChange={handleChange}
        placeholder="할일을 적어보세요."
      ></input>
      <button>작성하기</button>
    </form>
  );
};

export default InputForm;
