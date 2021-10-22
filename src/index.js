import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const reducer = () => {};
const store = createStore(reducer);

/************** TAKE AWAY
createStore는 data를 저장하는 store만드는 function
reducer는 그 data를 modify하는 function

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
