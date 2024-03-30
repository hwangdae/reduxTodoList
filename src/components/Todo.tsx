import React, { useState } from "react";
import { TodoType } from "../type/Type";
import { delTodo, switchIsdone } from "../redux/config/modules";
import InputForm from "./InputForm";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import styled from "styled-components";

interface Props {
  todo : TodoType;
  isDone : boolean;
}

const Todo = ({ todo, isDone }: Props) => {
  const [isEditTodo, setIsEditTodo] = useState(false);
  const dispatch = useDispatch();

  const delTodoHandler = (id: string) => {
    dispatch(delTodo(id));
  };
  const completeTodoHandler = (id: string) => {
    dispatch(switchIsdone(id));
  };

  const updateTodoHandler = () => {
    setIsEditTodo(!isEditTodo);
  };

  return (
    <S.TodoWrap>
      <S.TitleWrap>
        {isEditTodo ? (
          <InputForm
            type={"edit"}
            id={todo.id}
            setIsEditTodo={setIsEditTodo}
            prevtodo={todo.todo}
          />
        ) : (
          <S.TodoTitle>{todo.todo}</S.TodoTitle>
        )}
        {!isDone && (
          <Button type="button" onClick={updateTodoHandler}>
            {isEditTodo ? "취소하기" : "수정하기"}
          </Button>
        )}
      </S.TitleWrap>
      <S.BtWrap>
      <Button
        type="button"
        onClick={() => delTodoHandler(todo.id)}
        children={"삭제하기"}
      ></Button>
      <Button
        type="button"
        onClick={() => completeTodoHandler(todo.id)}
        children={isDone ? "취소하기" : "완료하기"}
      ></Button>
      </S.BtWrap>
    </S.TodoWrap>
  );
};

export default Todo;

const S ={
  TodoWrap : styled.div`
    border: solid 1px #eee;
    padding: 16px;
    margin-bottom: 10px;
  `,
  TitleWrap : styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  TodoTitle : styled.h3`
    margin: 30px 0px;
  `,
  BtWrap : styled.div`
    display: flex;
    gap: 5px;
  `,
}
