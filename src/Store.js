import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

export const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  if (action.type === ADD)
    return [...state, { text: action.todo, id: action.id }];
  if (action.type === DELETE)
    return state.filter((todo) => todo.id !== action.id);
  return state;
};

export const store = createStore(reducer);
