import React from "react";
import styled from "styled-components";
import Title from "home/components/title";
import Button from "app/components/button";
import * as routes from "app/constants/routes";
import { withRouter } from "react-router-dom";

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

export const HomeScreen = ({ history }) => {
  const handleNewGame = () => history.push(routes.GAME_MODE);
  const handleOptions = () => history.push(routes.OPTIONS);
  const handleLeaderboard = () => history.push(routes.LEADERBOARD);
  return (
    <Container>
      <Content>
        <Title text="battleship" className="title"></Title>
        <Button text="new game" onClick={handleNewGame}></Button>
        <Button text="leaderboard" onClick={handleLeaderboard}></Button>
        <Button text="options" onClick={handleOptions}></Button>
      </Content>
    </Container>
  );
};

export default withRouter(HomeScreen);
