import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';

const App = () => {
  const [todos, setTodos] = useState([

  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );


  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
    </TodoTemplate>
  );
};

export default App;
