import { useState } from 'react';

const heavyWork = () => {
  console.log("엄청 무거운 작업!!!");
  return ['전소영', '소영이'];
}

function App() {

  const [names, setNames] = useState(() => {
    return heavyWork();   // 초기값을 가져올 때 무거운 일인 경우 callback 형태로. 맨 처음 렌더링될 때만 콜
  });
  const [input, setInput] = useState("");
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setNames((prevState) => {    // 업데이트 전 이전 상태
      console.log("이전 " + prevState);
      return([input, ...prevState]);
    })
  }

  console.log(input);

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
