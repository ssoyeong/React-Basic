import { useEffect, useState, useCallback } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]);   // 처음 렌더링될 때만 함수 호출. 그 이후는 메모이제이션 된 해당 함수 사용.


  useEffect(() => {
    console.log("someFunction changed");
  }, [someFunction]);   // someFunction 객체. 주소값이 다름. 렌더링될 때마다 someFunction 호출됨.

  return (
    <div>
      <input
        type="number"
        valye={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default App;
