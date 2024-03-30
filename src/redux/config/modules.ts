import uuid from "react-uuid";
import { TodoType } from "../../type/Type";

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const SWITCH_ISDONE = "SWITCH_ISDONE";
const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = (payload: TodoType) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const delTodo = (payload: string) => {
  return {
    type: DEL_TODO,
    payload,
  };
};

export const switchIsdone = (payload: string) => {
  return {
    type: SWITCH_ISDONE,
    payload,
  };
};

export const updateTodo = (payload: any) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

const initialState: TodoType[] = [
  { id: uuid(), todo: "리덕스 공부하기", isDone: false },
  { id: uuid(), todo: "타입스크립트 공부하기", isDone: false },
];

export const todoListReducer = (
  state: TodoType[] = initialState,
  action: any
) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action)
      return [...state, action.payload];
    case DEL_TODO:
      console.log(action)
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    case SWITCH_ISDONE:
      console.log(action)
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    case UPDATE_TODO:
      console.log(action.payload)
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {...todo,todo: action.payload.todo}
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};
