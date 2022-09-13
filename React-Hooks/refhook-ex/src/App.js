import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCountState = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>State: {count}</p>
      <button onClick={increaseCountState}>State 증가</button>
    </div>
  );
};

export default App;
