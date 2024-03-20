import { combineReducers, createStore } from "redux";
import { todoListReducer } from "../../TodoList";

const rootReducer = combineReducers({
    todoList : todoListReducer
})

const store = createStore(rootReducer)

export default store