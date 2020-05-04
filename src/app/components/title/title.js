import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: ${props => props.theme.lightGreen};
  font-weight: bold;
  font-size: 50px;
`;

export default ({ text, ...props }) => {
  return <Container {...props}>{text.toUpperCase()}</Container>;
};
