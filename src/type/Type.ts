export interface TodoType {
  id: string;
  todo: string;
  isDone: boolean;
}

export interface RootState {
    todoList:TodoType[]
}