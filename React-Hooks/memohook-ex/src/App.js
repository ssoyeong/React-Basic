import React, { useState, useMemo } from 'react';

const hardCalculate = (number)  => {
  console.log("어려운 계산 ㅠㅠ");
  for (let i = 0; i < 999999999; i++) {}  // 생각하는 시간
  return number + 10000;
}

const easyCalculate = (number)  => {
  console.log("쉬운 계산 ㅎㅎ");
  return number + 1;
}

function App() {

  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // hard든 easy든 재렌더링 되면 둘 다 실행됨
  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber)
  }, [hardNumber])  // 의존성 배열
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>


      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default App;
