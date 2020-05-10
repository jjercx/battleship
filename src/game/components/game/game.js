import React from "react";
import styled from "styled-components";
import Stat from "game/components/stat";
import ShipItem from "game/components/ship-item/ship-item";
import { connect } from "react-redux";
import { getShips, getShots, getTurns, getHits } from "game/redux/game.reducer";
import * as actions from "game/redux/game.actions";
import Grid from "game/components/grid";
import { getSize, getCurrentPlayer } from "app/redux/game-info.reducer";
import { compose } from "redux";
import { withRouter, Redirect } from "react-router-dom";
import * as routes from "app/constants/routes";

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
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.black}99;
`;

export const Game = ({
  ships = [],
  hits,
  shots,
  turns,
  size,
  player,
  currentPlayer,
}) => {
  if (!ships || ships.length === 0) {
    return <Redirect to={routes.GAME_MODE} />;
  }

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
      {player !== currentPlayer && <Backdrop />}
    </Row>
  );
};

const mapStateToProps = (state, { player }) => ({
  ships: getShips(state, player),
  shots: getShots(state, player),
  turns: getTurns(state, player),
  hits: getHits(state, player),
  size: getSize(state),
  currentPlayer: getCurrentPlayer(state),
});

export default compose(connect(mapStateToProps, actions), withRouter)(Game);
