import { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../Store';

function Home({ toDos, addToDo }) {
  // console.log(props);
  const [text, setText] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    addToDo(text);
    setText('');
  }

  function onChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="enter what to do"
          value={text}
        />
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

// mapStateToProps를 이용해 store로부터 state를 Home에게 가져다 줄거임
function mapStateToProps(state) {
  return {
    toDos: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addTodo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
