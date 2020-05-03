import React from "react";
import styled from "styled-components";

const Close = styled.div`
  color: ${props => props.theme.green};
  border: 2px solid ${props => props.theme.green};
  font-size: 40px;
  position: fixed;
  top: 20px;
  right: 50px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ({ onClick, ...props }) => {
  const handleClick = () => {
    onClick();
  };
  return <Close {...props} onClick={handleClick} />;
};
