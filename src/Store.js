import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

export const handleAddTodo = (todo) => {
  return {
    type: ADD,
    id: Date.now(),
    todo,
  };
};

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

export const deleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch({ type: DELETE, id });
};

const reducer = (state = [], action) => {
  if (action.type === ADD)
    return [...state, { todo: action.todo, id: action.id }];
  if (action.type === DELETE)
    return state.filter((todo) => todo.id !== action.id);
  return state;
};

export const store = createStore(reducer);
