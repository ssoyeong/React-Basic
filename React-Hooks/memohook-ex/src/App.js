import React, { useEffect, useState, useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = isKorea ? '한국' : '외국';
  // const location = {
  //   country: isKorea ? '한국' : '외국',
  // };

  /*
  * 원시 타입, 객체 타입
  * 위 location은 객체 타입이기에 렌더링 될 때마다 메모리에 할당됨
  * 그러므로 useEffect의 location은 새로운 값으로 인식하고 반복 호출됨
  */

  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국',
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("call useEffect");
  }, [location]);

  return (
    <div>
      <h2>하루에 몇 끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default App;
