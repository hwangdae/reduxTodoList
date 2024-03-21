import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, TodoType } from "../type/Type";
import { delTodo, switchIsdone } from "../TodoList";
import Todo from "./Todo";

const TodoList = ({ isDone }: Pick<TodoType, "isDone">) => {

  const todoList = useSelector((state: RootState) => {
    return state.todoList;
  });

  console.log(todoList)
 
  return (
    <div>
      <h2>{isDone ? "Done...🎉" : "work...👍"}</h2>
      {todoList
        .filter((todo) => {
          return todo.isDone === isDone;
        })
        .map((todo: TodoType) => {
          return (
           <Todo  todo={todo} isDone={isDone}/>
          );
        })}
    </div>
  );
};

export default TodoList;
