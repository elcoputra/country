import React from "react";
import styled from "@emotion/styled/macro";
import { useNavigate } from "react-router-dom";

// icon
import LeftArrow from "../../../Icons/leftArrow";

const BackButton = ({ title = "Back to Homepage", path }) => {
  let navigate = useNavigate();

  return (
    <Button onClick={() => navigate(path)}>
      <LeftArrow />
      <div>{title}</div>
    </Button>
  );
};

const Button = styled.div`
  display: flex;

  width: calc(229px - 19px - 19px);
  height: 50px;
  left: 90px;
  top: 90px;

  padding-left: 19px;
  padding-right: 19px;

  background: #8362f2;
  border-radius: 10px;
  color: #ffffff;

  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;

export default BackButton;
