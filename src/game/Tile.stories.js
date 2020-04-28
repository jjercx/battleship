import React from "react";
import Tile from "game/Tile";
import styled from "styled-components";

export default {
  title: "Tile",
  component: Tile,
};

const Container = styled.div`
  display: grid;
  width: 50px;
  height: 50px;
`;

export const Default = () => (
  <Container>
    <Tile />
  </Container>
);
