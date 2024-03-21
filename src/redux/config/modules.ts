import uuid from "react-uuid";
import { TodoType } from "../../type/Type";


export const addTodo = (payload: TodoType) => {
  return {
    type: "ADD_TODO",
    payload,
  };
};

export const delTodo = (payload: string) => {
  return {
    type: "DEL_TODO",
    payload,
  };
};

export const switchIsdone = (payload: string) => {
  return {
    type: "SWITCH_ISDONE",
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
    case "ADD_TODO":
      return [...state, action.payload];
    case "DEL_TODO":
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    case "SWITCH_ISDONE":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
