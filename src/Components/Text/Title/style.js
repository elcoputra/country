import styled from "@emotion/styled/macro";

export const TextB = styled.b`
  font-size: ${(props) =>
    typeof props.size === "string" ? props.size : props.size + "px"};
`;
