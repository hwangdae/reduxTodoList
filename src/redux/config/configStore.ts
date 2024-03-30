import { Reducer, combineReducers, createStore } from "redux";
import { todoListReducer } from "./modules";

const rootReducer = combineReducers({
    todoList : todoListReducer
})

const store = createStore(rootReducer)

export default store