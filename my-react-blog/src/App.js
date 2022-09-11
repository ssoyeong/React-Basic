/* eslint-disable */    // warning message 제거

import { useState } from 'react';
import './App.css';

function App() {

  let message = 'Welcome!';
  // state는 변동 시 자동으로 html에 반영되게 만들고 싶을 때 사용 
  let [post, setPost] = useState(['포스트 타이틀1', '포스트 타이틀2', '포스트 타이틀3']);   // ['나의 포스트 목록', 함수]
  let [date, setDate] = useState(['9월 9일 발행', '9월 10일 발행', '9월 11일 발행']);

  return (  // return() 안에는 병렬로 태그 2개 이상 기입 금지
    <div className="App">   {/* class 넣을 때는 className 사용 */}
      <div className="title">
        <h4>소영이 블로그</h4>
      </div>
      <h4 style={{color : 'hotpink', fontSize : '16px'}}>{ message }</h4>    {/* style 넣을 때는 style={{이름 : '값'}} */}
      <div className="postList">
        <h4>{ post[0] }</h4>
        <p>{ date[0] }</p>
      </div>
      <div className="postList">
        <h4>{ post[1] }</h4>
        <p>{ date[1] }</p>
      </div>
      <div className="postList">
        <h4>{ post[2] }</h4>
        <p>{ date[2] }</p>
      </div>
    </div>
  );
}

export default App;
