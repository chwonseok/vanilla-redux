import { connect } from 'react-redux';
import { handleDelTodo } from '../Store';

function Todo({ todo, id, deleteTodo }) {
  console.log(todo);
  console.log(id);
  console.log(deleteTodo);

  function onClick() {
    deleteTodo(id);
  }

  return (
    <li>
      {todo} <button onClick={onClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: (id) => dispatch(handleDelTodo(id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
