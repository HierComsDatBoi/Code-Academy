import { Routes, Route } from "react-router-dom";
import Header from "./components/UI/organism/Header";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import styled from "styled-components";

const App = () => {
  const StyledHome = styled.main
  `
  margin: 20px;
  `
  ;
  return (
    <>
      <Header />
      <StyledHome>

      <main>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      </StyledHome>
      <footer></footer>
    </>
  );
}

export default App;
