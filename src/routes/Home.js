import { useState } from 'react';
import { connect } from 'react-redux';
import { handleAddTodo } from '../Store';

function Home(props) {
  console.log(props);
  const [todo, setTodo] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    console.log(todo);
    // addToDo(todo);
    props.addTodo(todo);
    setTodo('');
  }

  function onChange(e) {
    setTodo(e.target.value);
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="enter what to do"
          value={todo}
        />
      </form>
      <ul>{JSON.stringify(props.todos)}</ul>
    </>
  );
}

// mapStateToProps: store로부터 state를 Home에게 전달
function mapStateToProps(state) {
  return {
    todos: state,
  };
}
// mapStateToProps: store로부터 dispatch를 Home에게 전달
function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch(handleAddTodo(todo)),
  };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     addToDo: (text) => dispatch(actionCreators.addTodo(text)),
//   };
// }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
