import React, {useState, useReducer} from 'react';

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw',
};

const reducer = (state, action) => {    // 전달받은 action대로만 state를 변경함
  console.log("reducer works ", state, action);

  switch(action.type) {
    case ACTION_TYPES.deposit:
      return state + Number(action.payload);
    case ACTION_TYPES.withdraw:
      return state - Number(action.payload);
    default:
      return state;
  }; 
};

function App() {
  /*
  * reducer: state를 업데이트해 주는 역할 (은행)
  * dispatch: state를 업데이트 하고 싶을 때 reducer에게 하는 요구
  * action: dispatch 안에 들어갈 요구의 내용
  */

  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);   // money 초기값은 0

  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        step="1000"
      />
      <button onClick={() => {
        dispatch({type: ACTION_TYPES.deposit, payload: number});   // dispatch 인자로 action을 넣음. action은 보통 object, object 안에 type을 넣음
      }}>예금</button>
      <button onClick={() => {
        dispatch({type: ACTION_TYPES.withdraw, payload: number});
      }}>출금</button>
    </div>
  );
}

export default App;
