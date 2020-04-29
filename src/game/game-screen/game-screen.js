import React, { useEffect } from "react";
import styled from "styled-components";
import Grid from "game/grid";
import Stat from "game/stat";
import ShipItem from "game/ship-item/ship-item";
import Header from "app/header";
import { connect } from "react-redux";
import {
  getShips,
  getLoading,
  getShots,
  getTurns,
  getHits,
} from "game/game.reducer";
import * as actions from "game/game.actions";

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

const GameScreen = ({
  loading,
  ships,
  size = 10,
  gameSetup,
  hits,
  shots,
  turns,
}) => {
  useEffect(() => {
    gameSetup({ size });
  }, [gameSetup, size]);

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
            <Stat value={turns} title="Turns"></Stat>
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
});

export default connect(mapStateToProps, actions)(GameScreen);
