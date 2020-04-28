import React from "react";
import styled from "styled-components";

const Header = styled.div`
  height: 80px;
  width: 100%;
  background-color: ${props => props.theme.green}22;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px ${props => props.theme.green}11;
`;

const Text = styled.span`
  color: ${props => props.theme.green};
  font-size: 40px;
  font-weight: bold;
`;

export default () => (
  <Header>
    <Text>BATTLESHIP</Text>
  </Header>
);
