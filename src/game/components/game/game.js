import React from "react";
import styled from "styled-components";
import Stat from "game/components/stat";
import ShipItem from "game/components/ship-item/ship-item";
import { connect } from "react-redux";
import { getShips, getShots, getTurns, getHits } from "game/redux/game.reducer";
import * as actions from "game/redux/game.actions";
import Grid from "game/components/grid";
import { getSize } from "app/redux/game-info.reducer";

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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
`;

export const Game = ({ ships = [], hits, shots, turns, size, player }) => {
  return (
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
      <Grid size={size} player={player} />
    </Row>
  );
};

const mapStateToProps = (state, { player }) => ({
  ships: getShips(state, player),
  shots: getShots(state, player),
  turns: getTurns(state, player),
  hits: getHits(state, player),
  size: getSize(state),
});

export default connect(mapStateToProps, actions)(Game);
