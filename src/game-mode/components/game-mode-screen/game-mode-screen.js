import React, { useState } from "react";
import styled from "styled-components";
import Title from "app/components/title";
import Button from "../button";
import GameModeItem from "../game-mode-item";
import GameMode from "game-mode/models/game-mode";
import { withRouter } from "react-router-dom";
import * as routes from "app/constants/routes";
import * as actions from "game/redux/game.actions";
import { compose } from "redux";
import { connect } from "react-redux";
import Close from "app/components/close";

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
  justify-content: space-around;
  flex-direction: column;

  .title {
    margin-bottom: 30px;
  }
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GameModesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .game-mode-item {
    margin: 20px;
  }
`;

const InputContainer = styled.div`
  height: 50px;
  font-size: 24px;
`;

const Input = styled.input`
  color: white;
  background-color: ${props => props.theme.black};
  border: 1px solid white;
  font-size: 24px;
  width: 100px;
  margin-left: 20px;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const InputLabel = styled.span`
  color: white;
`;

const easy = GameMode.easy();
const medium = GameMode.medium();
const hard = GameMode.hard();
const custom = GameMode.custom();

export const GameModeScreen = ({ history, gameSetup }) => {
  const [selectedGameMode, setSelectedGameMode] = useState(null);
  const [turns, setTurns] = useState(75);

  const handleClick = gameMode => {
    setSelectedGameMode(gameMode);
    setTurns(gameMode.turns ?? 75);
  };

  const handleInput = event => {
    const text = event.target.value;

    if (text === "" || (/^\d*$/.test(text) && parseInt(text) > 0)) {
      setTurns(text);
    }
  };

  const handleReady = () => {
    gameSetup({ gameMode: selectedGameMode.setTurns(turns) });
    history.push(routes.GAME);
  };

  const handleClose = () => history.replace(routes.HOME);

  return (
    <Container>
      <Close onClick={handleClose}>X</Close>
      <Content>
        <Title text="game mode" className="title"></Title>
        <MainContent>
          <GameModesContainer>
            <GameModesContainer>
              <GameModeItem
                gameMode={easy}
                selectedGameMode={selectedGameMode}
                onClick={handleClick}
              />
              <GameModeItem
                gameMode={medium}
                selectedGameMode={selectedGameMode}
                onClick={handleClick}
              />
            </GameModesContainer>
            <GameModesContainer>
              <GameModeItem
                gameMode={hard}
                selectedGameMode={selectedGameMode}
                onClick={handleClick}
              />
              <GameModeItem
                gameMode={custom}
                selectedGameMode={selectedGameMode}
                onClick={handleClick}
              />
            </GameModesContainer>
          </GameModesContainer>
          <InputContainer>
            {selectedGameMode && selectedGameMode.name === "custom" && (
              <>
                <InputLabel>Turns:</InputLabel>
                <Input value={turns} onChange={handleInput} />
              </>
            )}
          </InputContainer>
        </MainContent>
        <Button
          text="ready"
          isDisabled={!selectedGameMode || !turns}
          onClick={handleReady}
        ></Button>
      </Content>
    </Container>
  );
};

export default compose(withRouter, connect(undefined, actions))(GameModeScreen);
