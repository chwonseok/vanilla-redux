import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../Store';

function Todo({ todo, deleteTodo, id }) {
  function onClick() {
    deleteTodo();
    // deleteTodo(id), 다른 방법
  }

  return (
    <li>
      <Link to={`${id}`}>{todo}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteTodo: () => dispatch(remove(ownProps.id)), // 이 방법은 ownProps를 이용하는 방법
    // deleteTodo: (id) => dispatch(handleDelTodo(id)), 다른 방법
  };
}

export default connect(null, mapDispatchToProps)(Todo);
