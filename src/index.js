import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const ADD = 'ADD';
const MINUS = 'MINUS';

const reducer = (state = 0, action) => {
  if (action.type === ADD) return state + 1;
  if (action.type === MINUS) return state - 1;
  return state;
};

const store = createStore(reducer);

const onChange = () => (number.innerText = store.getState());

store.subscribe(onChange);

add.addEventListener('click', () => store.dispatch({ type: ADD }));
minus.addEventListener('click', () => store.dispatch({ type: MINUS }));

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
