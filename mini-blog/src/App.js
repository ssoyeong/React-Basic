import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from "./component/page/PostWritePage";
import data from './data.json'

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {

  localStorage.setItem('user', JSON.stringify(data));
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(data))
  }, []);

  return (
    <BrowserRouter>
    <MainTitleText>Kakao Academy of Gachon Univ.</MainTitleText>
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="post-write" element={<PostWritePage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
