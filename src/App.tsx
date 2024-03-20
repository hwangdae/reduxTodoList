import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useInput } from './hook/useInput';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [inputValue,handleChange] = useInput<string>('')

  const todoList = useSelector((state:any)=>{
    return state.todoList
  })
  console.log(todoList)
  const dispatch = useDispatch()

  const addTodoHandler = (e:React.FormEvent)=> {
    e.preventDefault()
    const newTodo = {
      id:Date.now(),
      todo:inputValue,
      isDone:false
    }
    dispatch({type:'addTodo',payload:newTodo})

  }
  return (
    <div>
      <h1>TodoList</h1>
      <form onSubmit={addTodoHandler}>
        <input value={inputValue}
        onChange={handleChange}></input>
        <button>작성하기</button>
      </form>
      {todoList?.map((todo:any)=>{
        return <div>
          <h3>{todo.todo}</h3>
        </div>
      })}
    </div>
  );
}

export default App;
