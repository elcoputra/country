import React from "react";
import styled from "@emotion/styled/macro";

const List = ({ data }) => {
  return (
    <UlStyled>
      {data.map((item) => (
        <LiStyled>{item}</LiStyled>
      ))}
    </UlStyled>
  );
};

const UlStyled = styled.ul`
  padding: 0px;
`;

const LiStyled = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
  font-size: 14px;
  text-transform: capitalize;
  color: #ffffff;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export default List;
