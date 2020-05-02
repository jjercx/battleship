import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  color: white;
  font-weight: bold;
  font-size: 40px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.green};
  }
`;

export const Button = ({ text, onClick, ...props }) => {
  return (
    <Container onClick={onClick} {...props}>
      {text.toUpperCase()}
    </Container>
  );
};

export default Button;
