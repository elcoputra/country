import * as React from "react";
import styled from "@emotion/styled/macro";

const TextB = styled.b`
  font-family: "SFProTextBold";
  font-size: ${(props) =>
    typeof props.size === "string" ? props.size : props.size + "px"};
  width: ${(props) =>
    typeof props.width === "string" ? props.width : props.width + "px"};
  color: ${(props) => props.color};
  @media (max-width: 768px) {
    font-size: ${(props) =>
      typeof props.mobileSize === "string"
        ? props.mobileSize
        : props.mobileSize + "px"};
  }
`;

const Index = ({
  size = 24,
  mobileSize,
  text = "title",
  width = 50,
  color = "black",
  style,
}) => {
  return (
    <>
      <TextB
        size={size}
        mobileSize={mobileSize}
        style={style}
        width={width}
        color={color}
      >
        {text}
      </TextB>
    </>
  );
};

export default Index;
