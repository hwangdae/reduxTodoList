import React, { useState } from 'react'
import { TodoType } from '../type/Type'
import { updateTodo } from "../redux/config/modules";
import InputForm from "./InputForm";
import { delTodo, switchIsdone } from '../TodoList';
import { useDispatch } from 'react-redux';

const Todo = ({todo,isDone}:any) => {
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
    <div key={todo.id}>
    <div>
      {isEditTodo ? (
        <InputForm
          type={"edit"}
          id={todo.id}
          setIsEditTodo={setIsEditTodo}
        />
      ) : (
        <h3 style={{ display: "inline-block" }}>{todo.todo}</h3>
      )}

      {!isDone && (
        <button
          style={{ background: "none" }}
          onClick={updateTodoHandler}
        >
          {isEditTodo ? "취소" : "수정"}
        </button>
      )}
    </div>
    <button onClick={() => delTodoHandler(todo.id)}>삭제</button>
    <button onClick={() => completeTodoHandler(todo.id)}>
      {isDone ? "취소" : "완료"}
    </button>
  </div>
  )
}

export default Todo