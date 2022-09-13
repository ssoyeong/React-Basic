import React, {useState} from 'react';

function App() {
  /*
  * reducer: state를 업데이트해 주는 역할 (은행)
  * dispatch: state를 업데이트 하고 싶을 때 reducer에게 하는 요구
  * action: dispatch 안에 들어갈 요구의 내용
  */

  const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다</h2>
      <p>잔고: ?원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        step="1000"
      />
      <button>예금</button>
      <button>출금</button>
    </div>
  );
}

export default App;
