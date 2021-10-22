import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');

const reducer = (state = [], action) => {
  console.log('test');
};

const todoStore = createStore(reducer);
