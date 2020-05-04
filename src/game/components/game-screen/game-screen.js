import React from "react";
import styled from "styled-components";
import Grid from "game/components/grid";
import Stat from "game/components/stat";
import ShipItem from "game/components/ship-item/ship-item";
import Modal from "app/components/modal";
import Button from "app/components/button";
import { connect } from "react-redux";
import {
  getShips,
  getLoading,
  getShots,
  getTurns,
  getHits,
  getSize,
  getGameStatus,
} from "game/redux/game.reducer";
import * as actions from "game/redux/game.actions";
import { compose } from "redux";
import { withRouter, Redirect } from "react-router-dom";
import * as routes from "app/constants/routes";
import * as gameStatus from "game/constants/game-status";

const Container = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  align-items: center;
`;

export const GameScreen = ({
  loading,
  ships = [],
  size,
  hits,
  shots,
  turns,
  history,
  status,
  gameSetup,
}) => {
  const handleExit = () => history.replace(routes.HOME);

  const handleLeaderboard = () => history.replace(routes.LEADERBOARD);

  const handlePlayAgain = () => history.replace(routes.GAME_MODE);

  if (!status) {
    return <Redirect to={routes.GAME_MODE} />;
  }

  if (loading) {
    return null;
  }

  return (
    <Container>
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
      <Modal
        title={status === gameStatus.WIN ? "you won!" : "game over"}
        isVisible={status !== gameStatus.IN_PROGRESS}
      >
        <Column>
          <Button text="play again" onClick={handlePlayAgain} />
          <Button text="leaderboard" onClick={handleLeaderboard} />
          <Button text="exit" onClick={handleExit} />
        </Column>
      </Modal>
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
  status: getGameStatus(state),
});

export default compose(
  connect(mapStateToProps, actions),
  withRouter
)(GameScreen);
