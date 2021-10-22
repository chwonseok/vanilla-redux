import { useState } from 'react';

export default function Home() {
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
    </>
  );
}
