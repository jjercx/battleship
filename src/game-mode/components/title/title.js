import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #00ff00;
  font-weight: bold;
  font-size: 50px;
`;

export default ({ text, ...props }) => {
  return <Container {...props}>{text.toUpperCase()}</Container>;
};
