import React, { useState, useEffect } from 'react';


function App() {
  
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  
  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 렌더링될 때마다 실행
  useEffect(() => {
    console.log("rendering");
  }, [count]);

  // 마운트 될 때 && count가 업데이트 됐을 때 실행
  useEffect(() => {
    console.log("rendering -> count");
  }, [count]);

  // 마운트 될 때 && name이 업데이트 됐을 때 실행
  useEffect(() => {
    console.log("rendering -> name");
  }, [name]);

  // 마운트 될 때만, 맨 처음 렌더링될 때만 실행
  useEffect(() => {
    console.log("rendering -> first");
  }, []);

  return (
    <div>
      <button onClick={ handleCountUpdate }>Update</button>
      <span>count: { count }</span>
      <input type="text" value={ name } onChange={ handleInputChange }/>
      <span>name: { name }</span>
    </div>
  );
}

export default App;
