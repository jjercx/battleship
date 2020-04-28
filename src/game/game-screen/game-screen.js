import React from "react";
import styled from "styled-components";
import Grid from "game/grid";
import Stat from "game/stat";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const GameScreen = ({ size = 10 }) => (
  <Container>
    <Row>
      <Column>
        <StatPanel>
          <Stat value={0} title="Hits" color="red"></Stat>
          <Stat value={0} title="Shots" color="green"></Stat>
          <Stat value={0} title="Turns" color="blue"></Stat>
        </StatPanel>
      </Column>
      <Grid size={size} />
    </Row>
  </Container>
);

export default GameScreen;
