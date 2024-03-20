interface initType {
  id: number;
  todo: string;
  isDone: boolean;
}

const initialState = [
  { id: Date.now(), todo: "리덕스 공부하기", isDone: false },
];

export const todoListReducer = (state: any = initialState, action: any) => {
    console.log(state,"스테이트")
    console.log(action,"액션")
  switch (action.type) {
    case "addTodo":
      return [...state,action.payload];

    default:
      return state;
  }
};
