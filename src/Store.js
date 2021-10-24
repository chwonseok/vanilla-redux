import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const actionCreators = {
  addTodo,
  deleteTodo,
};

const reducer = (state = [], action) => {
  if (action.type === ADD)
    return [...state, { text: action.todo, id: action.id }];
  if (action.type === DELETE)
    return state.filter((todo) => todo.id !== action.id);
  return state;
};

export const store = createStore(reducer);
