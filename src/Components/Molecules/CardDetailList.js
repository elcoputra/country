import React from "react";
import styled from "@emotion/styled/macro";

import CardAtom from "../Atoms/Card";

const CardDetailList = ({ data, dataMap }) => {
  return (
    <CardAtom withCardShadow styleInnerCard={{ justifyContent: "center" }}>
      <UlStyled>
        {dataMap.map((item, index) => (
          <LiStyled key={index}>
            {item.key}: <b>{item.value}</b>
          </LiStyled>
        ))}
      </UlStyled>
    </CardAtom>
  );
};

const UlStyled = styled.ul`
  padding: 0px;
`;

const LiStyled = styled.li`
  list-style-type: none;
  margin-bottom: 8px;
  font-size: 18px;
  text-transform: capitalize;
  &:last-child {
    margin-bottom: 0px;
  }
`;

CardDetailList.defaultProps = {
  dataMap: [
    { key: "Capital", value: "Jakarta" },
    { key: "Region", value: "Asia" },
    { key: "Subregion", value: "South-Eastern Asia" },
  ],
};

export default CardDetailList;
