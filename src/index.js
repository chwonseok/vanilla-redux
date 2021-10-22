import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  if (action.type === ADD_TODO)
    return [...state, { text: action.todo, id: action.id }];
  if (action.type === DELETE_TODO) return [...state, state];
  return state;
};

const todoStore = createStore(reducer);

const printTodos = () => {
  const toDos = todoStore.getState();
  ul.innerHTML = '';
  toDos.forEach((todo) => {
    const li = document.createElement('li');
    li.id = todo.id;
    li.innerText = todo.text;
    ul.appendChild(li);
  });
};

todoStore.subscribe(printTodos);

const addTodo = (todo) => {
  todoStore.dispatch({ type: ADD_TODO, id: Date.now(), todo });
};

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = '';
  addTodo(todo);
};

form.addEventListener('submit', onSubmit);
