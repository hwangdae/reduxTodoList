import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, TodoType } from "../type/Type";
import { delTodo, switchIsdone } from "../TodoList";

const TodoList = ({ isDone }: Pick<TodoType,'isDone'>) => {

  const todoList = useSelector((state: RootState) => {
    return state.todoList;
  });
  const dispatch = useDispatch();

  const delTodoHandler = (id: string) => {
    dispatch(delTodo(id));
  };
  const completeTodoHandler = (id: string) => {
    dispatch(switchIsdone(id));
  };

  return (
    <div>
      <h2>{isDone ? 'Done...🎉' : 'work...👍'}</h2>
      {todoList
        .filter((todo) => {
          return todo.isDone === isDone;
        })
        .map((todo: TodoType) => {
          return (
            <div key={todo.id}>
              <h3>{todo.todo}</h3>
              <button onClick={() => delTodoHandler(todo.id)}>삭제</button>
              <button onClick={() => completeTodoHandler(todo.id)}>{isDone ? '취소':'완료'}</button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
