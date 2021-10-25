import { connect } from 'react-redux';

function Detail({ todo }) {
  return <h1>{todo?.todo}</h1>;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;

  return {
    todo: state.find((todo) => todo.id === parseInt(id)),
    // todo: state, // 이렇게도 가능하지만, 위는 조금더 미리 가공된 data를 props로 넘겨줌
  };
}

export default connect(mapStateToProps)(Detail);
