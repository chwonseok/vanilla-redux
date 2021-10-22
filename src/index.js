import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const reducer = (state = 0, action) => {
  if (action.type === 'add') return state + 1;
  if (action.type === 'minus') return state - 1;
  return state;
};

const store = createStore(reducer);

store.dispatch({ type: 'add' });
store.dispatch({ type: 'add' });
store.dispatch({ type: 'minus' });

console.log(store.getState());

/************** TAKE AWAY
createStore는 data(state)를 저장하는 store만드는 function
reducer는 그 data(state)를 modify하는 function

**************/

/* Basic Vanilla JS code
let count = 0;

const updateNumber = () => (number.innerText = count);

const handleAdd = () => {
  count++;
  updateNumber();
};

const handleMinus = () => {
  count--;
  updateNumber();
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
*/
