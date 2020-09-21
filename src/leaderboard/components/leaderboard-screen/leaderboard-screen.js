import React from "react";
import styled from "styled-components";
import Title from "app/components/title";
import Close from "app/components/close";
import { withRouter } from "react-router-dom";
import * as routes from "app/constants/routes";
import { compose } from "redux";
import { connect } from "react-redux";
import { getGameRecords } from "../../redux/game-records.reducer";
import GameRecorsTable from "../game-record-table";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    margin-bottom: 50px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 30px;
`;

export const LeaderboardScreen = ({ history, gameRecords }) => {
  const handleClose = () => history.replace(routes.HOME);
  return (
    <Container>
      <Close onClick={handleClose}>X</Close>
      <Content>
        <Title text="leaderboard" className="title"></Title>
        <Column>
          <GameRecorsTable gameRecords={gameRecords} />
        </Column>
      </Content>
    </Container>
  );
};

const mapStateToProps = state => ({
  gameRecords: getGameRecords(state),
});

export default compose(withRouter, connect(mapStateToProps))(LeaderboardScreen);
