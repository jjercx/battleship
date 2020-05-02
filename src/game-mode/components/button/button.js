import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: inline-block;
  padding: 10px;
  color: white;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  border: 3px solid white;

  ${props =>
    props.isDisabled
      ? css`
          opacity: 0.3;
          color: white;
          border-color: white;
          cursor: default;
        `
      : css`
          &:hover {
            color: ${props => props.theme.green};
            border-color: ${props => props.theme.green};
          }
        `}
`;

export default ({ text, onClick, isDisabled, ...props }) => {
  return (
    <Container onClick={onClick} isDisabled={isDisabled} {...props}>
      {text.toUpperCase()}
    </Container>
  );
};
