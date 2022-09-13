import React, {useState, useRef, useEffect} from 'react';

const App = () => {

  const [count, setCount] = useState(1);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;  // ref는 rerendering을 발생시키지 않음
    console.log("렌더링 수: ", renderCount.current);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려주세용</button>
    </div>
  );
};

export default App;
