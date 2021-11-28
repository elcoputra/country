import React from "react";
import styled from "@emotion/styled/macro";

import TitleB from "../../Components/Text/Title/index";
import RegularInput from "../../Components/Input/Regular";

const Index = () => {
  const handleChange = (val) => {
    console.log(val);
  };

  return (
    <Container id="Container-home">
      <TitleB
        size={72}
        text="Country"
        width={294}
        style={{ marginTop: 263, marginBottom: 43, fontWeight: 700 }}
      />
      <RegularInput
        handleChange={handleChange}
        id={"text-search"}
        type="text"
        name="search-input"
        width={700}
        height={60}
        icon="search"
        placeholder="Type any country name"
      />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  align-items: center;
`;

export default Index;
