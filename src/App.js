import * as React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled/macro";

// Page
import Home from "./Page/Home";
import Detail from "./Page/Detail";

function App() {
  return (
    <Container id="container-root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: columns;
  width: 100vw;
  height: 100vh;
`;

export default App;
