import React from "react";
import styled from "styled-components";
import Grid from "game/components/grid";
import Stat from "game/components/stat";
import ShipItem from "game/components/ship-item/ship-item";
import Header from "app/components/header";
import { connect } from "react-redux";
import {
  getShips,
  getLoading,
  getShots,
  getTurns,
  getHits,
  getSize,
} from "game/redux/game.reducer";
import * as actions from "game/redux/game.actions";

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

const GameScreen = ({ loading, ships, size, hits, shots, turns }) => {
  if (loading) {
    return null;
  }

  return (
    <Container>
      <Header />
      <Row>
        <Column>
          <StatPanel>
            <Stat value={hits} title="Hits"></Stat>
            <Stat value={shots} title="Shots"></Stat>
            <Stat value={turns === Infinity ? "∞" : turns} title="Turns"></Stat>
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
};

const mapStateToProps = state => ({
  loading: getLoading(state),
  ships: getShips(state),
  shots: getShots(state),
  turns: getTurns(state),
  hits: getHits(state),
  size: getSize(state),
});

export default connect(mapStateToProps, actions)(GameScreen);
