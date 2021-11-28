import React from "react";
import styled from "@emotion/styled/macro";
import { useNavigate } from "react-router-dom";

// hooks
import useSearchResult from "../../Hooks/useSearch";

// Component
import TitleB from "../../Components/Text/Title/index";
import RegularInput from "../../Components/Input/Regular";

const Index = () => {
  const navigate = useNavigate();
  const refSearch = React.useRef(null);
  const [searchPosition, setSearchPosition] = React.useState(null);

  const { handleChange, searchResult, searchVal, loading } = useSearchResult();

  React.useEffect(() => {
    setSearchPosition(refSearch.current.getBoundingClientRect());
  }, [refSearch]);

  return (
    <Container id="Container-home">
      <TitleB
        size={72}
        text="Country"
        width={294}
        style={{ marginTop: 263, marginBottom: 43, fontWeight: 700 }}
      />
      <RegularInput
        innerRef={refSearch}
        handleChange={handleChange}
        id={"text-search"}
        type="text"
        name="search-input"
        width={700}
        height={60}
        icon="search"
        placeholder="Type any country name"
      />
      {searchPosition && searchVal && (
        <ContainerResult top={searchPosition.bottom}>
          {!searchResult.error && !loading ? (
            searchResult?.data?.map(
              (item, index) =>
                index <= 4 && (
                  <ButtonNav
                    key={index}
                    onClick={() =>
                      navigate(`/detail?country=${item.name.common}`, {
                        state: searchResult,
                      })
                    }
                  >
                    {item.name.common}
                  </ButtonNav>
                )
            )
          ) : !loading ? (
            <NotFound>Data Not Found</NotFound>
          ) : (
            <div>loading</div>
          )}
        </ContainerResult>
      )}
    </Container>
  );
};

const NotFound = styled.div`
  padding-left: 25px;
  color: #ff0000;
  font-family: "SFProTextRegular";
`;

const ButtonNav = styled.button`
  height: 40px;
  padding-left: 25px;
  padding-top: 9px;
  padding-bottom: 10px;
  background-color: transparent;
  text-align: start;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "SFProTextRegular";
  font-size: 18px;
  &:hover {
    background-color: #f4f4f4;
  }
`;
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 48rem;
  width: 90%;
  align-items: center;
`;

const ContainerResult = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 700px;
  top: 460px;
  padding-top: 25px;
  padding-bottom: 25px;

  background: #ffffff;
  box-shadow: -4px -4px 4px rgba(0, 0, 0, 0.02), 4px 4px 4px rgba(0, 0, 0, 0.02);
  border-radius: 5px;
`;

export default Index;
