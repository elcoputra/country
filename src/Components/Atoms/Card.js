import React from "react";
import styled from "@emotion/styled/macro";

const Card = ({ children, withBackground, withCardShadow, styleInnerCard }) => {
  return (
    <CardContainer
      withBackground={withBackground}
      withCardShadow={withCardShadow}
    >
      <InnerCard style={styleInnerCard}>{children}</InnerCard>
    </CardContainer>
  );
};

const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`;

const CardBackground = `
    background-image: url(img/globe.svg);
    background-repeat: no-repeat;
    background-size: 204px 204px;
    background-position: bottom -83px right 0px;
`;

const CardShadow = `
    box-shadow: -4px -4px 4px rgba(0, 0, 0, 0.02), 4px 4px 4px rgba(0, 0, 0, 0.02);
    border-radius: 5px;~
`;

const CardContainer = styled.div`
  display: flex;
  min-width: 540px;
  height: 143px;

  margin-top: 25px;
  margin-right: 25px;

  ${(props) => props.withCardShadow && CardShadow}

  background: #ffffff;
  ${(props) => props.withBackground && CardBackground}

  @media (max-width: 1200px) {
    margin-right: 0px;
    margin-bottom: 25px;
  }
`;

export default Card;
