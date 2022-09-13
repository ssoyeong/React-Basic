import React, {useState, useRef, useEffect} from 'react';

const App = () => {

  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();   // 로그인 텍스트인풋에 자동으로 focus
  }, []);
  
  const login = () => {
    alert(`Welcome ! ${inputRef.current.value}`);
    inputRef.current.focus();

  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default App;
