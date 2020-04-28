import React from "react";
import styled from "styled-components";
import Grid from "game/grid";
import Stat from "game/stat";
import shipData from "./data";
import Ship from "game/ship-item/ship";
import ShipItem from "game/ship-item/ship-item";
import Header from "app/header";

const Container = styled.div`
  padding-bottom: 20px;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.black};
`;

const StatPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px;
`;

const ShipPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
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
  justify-content: center;
`;

const ships = [];
shipData.forEach(({ count, size }) => {
  [...Array(count)].forEach((_, i) => {
    ships.push(new Ship(size));
  });
});

const GameScreen = ({ size = 10 }) => (
  <Container>
    <Header />
    <Row>
      <Column>
        <StatPanel>
          <Stat value={0} title="Hits" color="red"></Stat>
          <Stat value={0} title="Shots" color="green"></Stat>
          <Stat value={0} title="Turns" color="blue"></Stat>
        </StatPanel>
        <ShipPanel>
          {ships.map(ship => (
            <ShipItem ship={ship} key={ship.id}></ShipItem>
          ))}
        </ShipPanel>
      </Column>
      <Grid size={size} />
    </Row>
  </Container>
);

export default GameScreen;
