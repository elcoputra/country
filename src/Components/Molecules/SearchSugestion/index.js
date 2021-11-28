import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled/macro";

const Index = ({ searchPosition, searchResult, searchVal, loading }) => {
  const navigate = useNavigate();

  return (
    <>
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
            <Loading>loading</Loading>
          )}
        </ContainerResult>
      )}
    </>
  );
};

const ContainerResult = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 700px;
  top: ${(props) => props.top + 12}px;
  padding-top: 25px;
  padding-bottom: 25px;

  background: #ffffff;
  box-shadow: -4px -4px 4px rgba(0, 0, 0, 0.02), 4px 4px 4px rgba(0, 0, 0, 0.02);
  border-radius: 5px;
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

const NotFound = styled.div`
  padding-left: 25px;
  color: red;
  font-family: "SFProTextRegular";
`;

const Loading = styled.div`
  padding-left: 25px;
  color: blueviolet;
  font-family: "SFProTextRegular";
`;

export default Index;
