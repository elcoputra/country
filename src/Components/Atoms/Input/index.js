import React from "react";
import styled from "@emotion/styled/macro";

import SearchIcon from "../../../Icons/search";

const Index = ({
  id = "input",
  type = "text",
  name = "input",
  width = 50,
  height = 60,
  icon = "",
  placeholder = "Placeholder",
  innerRef,
  autoFocus,
  onKeyDown,
  autoComplete,
  handleChange = () => {},
}) => {
  const [inputFocus, setInputFocus] = React.useState(false);

  return (
    <ContainerInput
      ref={innerRef}
      id={"container-" + id}
      type={type}
      name={name}
      width={width}
      height={height}
      borderColor={inputFocus ? "#8362f2" : "#c8c8c8"}
    >
      <Input
        id={"input-" + id}
        autoComplete="off"
        onKeyDown={onKeyDown}
        autoFocus={autoFocus}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
      {icon === "search" && (
        <SearchIcon fill={inputFocus ? "#8362F2" : "#C8C8C8"} />
      )}
    </ContainerInput>
  );
};

export const ContainerInput = styled.div`
  width: ${(props) =>
    typeof props.width === "string" ? props.width : props.width + "px"};
  height: ${(props) =>
    typeof props.height === "string" ? props.height : props.height + "px"};
  display: flex;
  flex-direction: row;
  padding: 17px 26px 18px 26px;
  border: 2px solid ${(props) => props.borderColor};
  box-sizing: border-box;
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  margin: 0px;
  outline: 0px;
  border: none;
  font-family: "SFProTextRegular";
  font-size: 18px;
  font-weight: 500px;
`;

export default Index;
