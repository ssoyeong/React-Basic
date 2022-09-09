import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
    <MainTitleText>Kakao Academy of Gachon Univ.</MainTitleText>
    <Routes>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
