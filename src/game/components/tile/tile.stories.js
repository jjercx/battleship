import React from "react";
import Tile from "game/components/tile";
import styled from "styled-components";

export default {
  title: "game/Tile",
  component: Tile,
};

const Container = styled.div`
  display: grid;
  width: 50px;
  height: 50px;
`;

export const Default = () => (
  <Container>
    <Tile row={0} col={0} />
  </Container>
);
