import React, {useState, useRef} from 'react';

const App = () => {

  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  }

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref: ", countRef.current);
  };


  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("var: ", countVar);
  };

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };


  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더😆</button>
      <button onClick={increaseRef}>Ref 올려</button>
      {/* ref 는 렌더 이전의 값을 가지고 있음 */}
      <button onClick={increaseVar}>Var 올려</button>
      {/* var는 렌더링 될 때마다 0으로 초기화됨 */}
      <button onClick={printResults}>Ref Var 값 출력</button>
    </div>
  );
};

export default App;
