import React from "react";
import styled from "styled-components";
import Grid from "game/grid";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GameScreen = ({ size = 10 }) => (
  <Container>
    <Grid size={size} />
  </Container>
);

export default GameScreen;
