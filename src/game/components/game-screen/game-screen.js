import React from "react";
import styled from "styled-components";
import Game from "game/components/game";
import Modal from "app/components/modal";
import Button from "app/components/button";
import { connect } from "react-redux";
import { getGameStatus } from "game/redux/game.reducer";
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${props => props.theme.black};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GameScreen = ({ history, status }) => {
  const handleExit = () => history.replace(routes.HOME);

  const handleLeaderboard = () => history.replace(routes.LEADERBOARD);

  const handlePlayAgain = () => history.replace(routes.GAME_MODE);

  if (!status) {
    return <Redirect to={routes.GAME_MODE} />;
  }

  return (
    <Container>
      <Game />
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
  status: getGameStatus(state),
});

export default compose(
  connect(mapStateToProps, actions),
  withRouter
)(GameScreen);
