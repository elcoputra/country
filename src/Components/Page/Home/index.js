import React from "react";
import styled from "@emotion/styled/macro";

// hooks
import useSearchResult from "../../../Hooks/useSearch";

// Organisms
import SearchWithTitleOrganisms from "../../Organisms/Home/SearchWithTitle";

const Index = () => {
  const { handleChange, searchResult, searchVal, loading } = useSearchResult();

  return (
    <Container id="Container-home">
      <SearchWithTitleOrganisms
        handleChange={handleChange}
        searchResult={searchResult}
        searchVal={searchVal}
        loading={loading}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1440px;
  width: 90%;
  align-items: center;
`;

export default Index;
