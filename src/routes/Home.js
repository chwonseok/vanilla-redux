import { useState } from 'react';
import { connect } from 'react-redux';

function Home(props) {
  console.log(props);
  const [text, setText] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
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
      <ul></ul>
    </>
  );
}

// mapStateToProps를 이용해 store로부터 state를 Home에게 가져다 줄거임
function mapStateToProps(state) {
  return {
    test: state,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
