import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  if (action.type === ADD_TODO)
    return [...state, { text: action.todo, id: action.id }];
  if (action.type === DELETE_TODO)
    return state.filter((todo) => todo.id !== action.id);
  return state;
};

const todoStore = createStore(reducer);

const addTodo = (todo) => {
  todoStore.dispatch({ type: ADD_TODO, id: Date.now(), todo });
};

const deleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  todoStore.dispatch({ type: DELETE_TODO, id });
};

const printTodos = () => {
  const toDos = todoStore.getState();
  ul.innerHTML = '';
  toDos.forEach((todo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.id = todo.id;
    li.innerText = todo.text;
    btn.innerText = 'delete';
    ul.appendChild(li);
    li.appendChild(btn);

    btn.addEventListener('click', deleteTodo);
  });
};

todoStore.subscribe(printTodos);

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = '';
  addTodo(todo);
};

form.addEventListener('submit', onSubmit);
