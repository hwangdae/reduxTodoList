import { Reducer, combineReducers, createStore } from "redux";
import { todoListReducer } from "../../TodoList";
import { TodoType } from "../../type/Type";

const rootReducer = combineReducers({
    todoList : todoListReducer
})

const store = createStore(rootReducer)

export default store