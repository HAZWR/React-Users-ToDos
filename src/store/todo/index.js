import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
     name: 'todo',
     initialState: {
          list: [],
     },
     reducers: {
          add: (state, action) => {
               // Redux Toolkit allows us to write "mutating" logic in reducers. It
               // doesn't actually mutate the state because it uses the Immer library,
               // which detects changes to a "draft state" and produces a brand new
               // immutable state based off those changes
               state.list = [...state.list, ...action.payload]
          },
          remove: (state, action) => {
               state.list = state.list.filter(todo => todo.id !== action.payload);
          },
     },
})

// Action creators are generated for each case reducer function
export const { add, remove} = todoSlice.actions

export default todoSlice.reducer
