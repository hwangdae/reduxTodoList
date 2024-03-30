export interface TodoType {
  id: string;
  todo: string | undefined;
  isDone: boolean;
}

export interface RootState {
    todoList:TodoType[]
}