import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addTodo, updateTodo } from "../redux/config/modules";
import Button from "../Button/Button";
import styled from "styled-components";

interface Props {
  type: string;
  id?: string;
  setIsEditTodo?: React.Dispatch<React.SetStateAction<boolean>>;
  prevtodo?: string;
}

const InputForm = ({ type, id, setIsEditTodo, prevtodo }: Props) => {
  const [inputValue, setInputValue] = useState<string | undefined>("");

  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue(prevtodo!);
  }, [prevtodo]);

  const inputHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue || inputValue?.trim() === "") {
      alert("글을 입력해 주세요.");
      return;
    }
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
    let updatedTodo = {
      id,
      todo: inputValue,
    };
    dispatch(updateTodo(updatedTodo));

    setIsEditTodo!(false);
  };

  return (
    <S.InputForm onSubmit={inputHandler}>
      <S.Input
        value={inputValue || ""}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={
          type === "add" ? "할일을 적어보세요." : "수정할 할일을 적어보세요."
        }
      ></S.Input>
      <Button type="submit" children={"작성하기"}></Button>
    </S.InputForm>
  );
};

export default InputForm;

const S = {
  InputForm: styled.form`
    display: flex;
    gap: 5px;
    margin: 20px 0px;
  `,
  Input: styled.input`
    width: 700px;
    padding: 10px 4px;
  `,
};
