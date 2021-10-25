import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

export const handleAddTodo = createAction('ADD');
export const handleDelTodo = createAction('DELETE');

const reducer = (state = [], action) => {
  if (action.type === handleAddTodo.type)
    return [...state, { todo: action.payload, id: Date.now() }];
  if (action.type === handleDelTodo.type)
    return state.filter((todo) => todo.id !== action.payload);
  return state;
};

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
 * **********************************/
