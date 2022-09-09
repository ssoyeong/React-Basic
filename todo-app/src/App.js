import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  // useState를 사용하여 todos 선언
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'VSCode의 환경체크하기',
      checked: true,
    },
    {
      id: 2,
      text: '도커이미지 생성 및 배포하기',
      checked: true,
    },
    {
      id: 3,
      text: '코드의 생산성 높이기 훈련',
      checked: false,
    },
  ]);

  // 고유 값으로 사용될 id
  // ref를 사용하여 변수 담기
  // 렌더링 되어도 useRef는 초기화 되지 않고 이전 값을 계속 유지함
  // useRef(this.current에 값을 저장해줌) nextId.current를 이용하여 호출
  const nextId = useRef(4);

  // 함수들을 선언
  // 모든 함수들은 todos 값이 변경됐을 때에만 함수를 초기화함
  // setTodos 호출 -> state를 변경하는 것이기에 -> 다시 렌더링 -> view update
  
  // todos가 바뀌었을 때만 onInsert 함수를 선언함
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      console.log('onInsert 호출');
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  // todos가 바뀌었을 때만 onRemove 함수를 선언함
  const onRemove = useCallback(
    // prop으로 받은 id를 가지고 filter를 하여 해당 id를 가진 객체를 제외한 나머지만
    // setTodos를 활용하여 state를 변경해줌
    // state를 변경하였기에 다시 렌더링
    id => {
      console.log('onRemove 호출');
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  // todos가 바뀌었을 때만 onToggle 함수를 선언함
  const onToggle = useCallback(
    id => {
      // prop으로 받은 id를 이용하여 todos를 살펴봄
      // todos 중 같은 id를 발견하면 checked 값을 뒤집어줌
      // 그리고 다시 렌더링
      console.log('onToggle 호출');
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked} : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
