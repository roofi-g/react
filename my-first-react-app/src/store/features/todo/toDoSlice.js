import {createSlice} from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: { todos: [
      {
        id: Date.now(),
        description: 'Описание задачи',
        isCompleted: false
      }
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      const newArr = [...state.todos, {id: Date.now(), description: action.payload, isCompleted: false}];
      return state = {...state, todos: newArr};
    },
    deleteTodo: (state, action) => {
      const newArr = state.todos.filter(el => el.id !== action.payload);
      return state = {...state, todos: newArr};
    },
    checked: (state, action) => {
      const todo = state.todos.find(el => el.id === action.payload.id);
      if (todo) todo.isCompleted = !todo.isCompleted;
    }
  }
})

export const { addTodo, deleteTodo, checked } = todoListSlice.actions;
export default todoListSlice.reducer;
