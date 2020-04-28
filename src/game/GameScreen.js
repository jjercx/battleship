import React from "react";
import Tile from "game/Tile";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  flex: 1;
  max-width: 800px;
  max-height: 800px;
`;

const Row = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
`;

const GameScreen = ({ size = 10 }) => (
  <Container>
    <Grid>
      {[...Array(size)].map((_, i) => (
        <Row key={i.toString()}>
          {[...Array(size)].map((_, j) => (
            <Tile key={j.toString()} />
          ))}
        </Row>
      ))}
    </Grid>
  </Container>
);

export default GameScreen;
