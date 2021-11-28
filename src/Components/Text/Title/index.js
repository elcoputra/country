import * as React from "react";
import styled from "@emotion/styled/macro";

const TextB = styled.b`
  font-family: "SFProTextBold";
  font-size: ${(props) =>
    typeof props.size === "string" ? props.size : props.size + "px"};
  width: ${(props) =>
    typeof props.width === "string" ? props.width : props.width + "px"};
`;

const Index = ({ size = 24, text = "title", width = 50, style }) => {
  return (
    <>
      <TextB size={size} style={style} width={width}>
        {text}
      </TextB>
    </>
  );
};

export default Index;
