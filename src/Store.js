import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const handleAddTodo = createAction('ADD');
export const handleDelTodo = createAction('DELETE');

// 주의점! createReducer 사용 시, either
// 1) state를 mutate하거나 (이는 자동적으로 new state로 return이 될 것임 by immer.js)
// 2) new state를 return 해야 함!
const reducer = createReducer([], {
  [handleAddTodo]: (state, action) => {
    state.push({ todo: action.payload, id: Date.now() });
  },
  [handleDelTodo]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});

export const store = createStore(reducer);

/****************************
 * 
// const deleteTodo = (id) => {
//   return {
//     type: DELETE,
//     id,
//   };
// };

// export const actionCreators = {
//   addTodo,
//   deleteTodo,
// };

// export const addTodo = (todo) => {
//   store.dispatch({ type: ADD, id: Date.now(), todo });
// };

// export const deleteTodo = (e) => {
//   const id = parseInt(e.target.parentNode.id);
//   store.dispatch({ type: handleDelTodo.type, id });
// };

---------------------------------------------------
* My way not using Date.now() as id in Reducer
// const ADD = 'ADD';
// const DELETE = 'DELETE';

// export const handleAddTodo = (todo) => {
//   return {
//     type: ADD,
//     id: Date.now(),
//     todo,
//   };
// };

// export const handleDelTodo = (id) => {
//   return {
//     type: DELETE,
//     id: id,
//   };
// };

// const reducer = (state = [], action) => {
//   if (action.type === handleAddTodo.type)
//     return [...state, { todo: action.payload, id: action.id }];
//   if (action.type === handleDelTodo.type)
//     return state.filter((todo) => todo.id !== action.payload);
//   return state;
// };
 * **********************************/
