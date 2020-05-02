import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  padding: 10px;
  color: white;
  font-weight: bold;
  font-size: 40px;
  cursor: pointer;
  border: 6px solid white;
  &:hover {
    color: ${props => props.theme.green};
    border-color: ${props => props.theme.green};
  }
`;

export default ({ text, onClick, ...props }) => {
  return (
    <Container onClick={onClick} {...props}>
      {text.toUpperCase()}
    </Container>
  );
};
