import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface singleTodo {
  name: string;
  id: string;
}

interface todoType {
  todoList: singleTodo[];
}

const initialState: todoType = {
  todoList: [],
};

const todoReduser = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<singleTodo>) => {
      return { ...state, todoList: [...state.todoList, action.payload] };
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      return {
        ...state,
        todoList: state.todoList.filter(
          (item: singleTodo) => item.id !== action.payload.id
        ),
      };
    },
    updateTodo: (state, action: PayloadAction<singleTodo>) => {
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id !== action.payload.id ? item : action.payload
        ),
      };
    },
  },
});

export default todoReduser.reducer;

export const { addTodo, deleteTodo, updateTodo } = todoReduser.actions;
