import React from "react";
import styled from "styled-components";
import Title from "home/components/title";
import Button from "app/components/button";
import * as routes from "app/constants/routes";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../redux/home.actions";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    margin-bottom: 30px;
  }
`;

export const HomeScreen = ({ history, setNumPlayers }) => {
  const handleNewGame = numPlayers => {
    setNumPlayers({ numPlayers });
    history.push(routes.GAME_MODE);
  };

  const handleOptions = () => history.push(routes.OPTIONS);
  const handleLeaderboard = () => history.push(routes.LEADERBOARD);

  return (
    <Container>
      <Content>
        <Title text="battleship" className="title"></Title>
        <Button text="new game (1p)" onClick={() => handleNewGame(1)}></Button>
        <Button text="new game (2p)" onClick={() => handleNewGame(2)}></Button>
        <Button text="leaderboard" onClick={handleLeaderboard}></Button>
        <Button text="options" onClick={handleOptions}></Button>
      </Content>
    </Container>
  );
};

export default compose(withRouter, connect(undefined, actions))(HomeScreen);
