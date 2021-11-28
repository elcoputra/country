import * as React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled/macro";

// Page
import Home from "./Components/Page/Home";
import Detail from "./Components/Page/Detail";

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
  width: 100%;
`;

export default App;
