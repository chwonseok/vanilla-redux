import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleDelTodo } from '../Store';

function Todo({ todo, deleteTodo, id }) {
  function onClick() {
    deleteTodo();
    // deleteTodo(id), 다른 방법
  }

  return (
    <li>
      <Link to={`${id}`}>
        {todo} <button onClick={onClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteTodo: () => dispatch(handleDelTodo(ownProps.id)), // 이 방법은 ownProps를 이용하는 방법
    // deleteTodo: (id) => dispatch(handleDelTodo(id)), 다른 방법
  };
}

export default connect(null, mapDispatchToProps)(Todo);
