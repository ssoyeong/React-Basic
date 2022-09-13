import React, {useState, useRef} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);

  console.log("렌더링");

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;  // 값은 증가하지만 화면이 렌더링되기 전까지는 화면에 출력되는 값은 변하지 않음
    console.log("ref: " + countRef.current); 
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 증가</button>
      <button onClick={increaseCountRef}>Ref 증가</button>
    </div>
  );
};

export default App;
