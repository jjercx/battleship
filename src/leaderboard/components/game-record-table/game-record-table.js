import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import * as gameStatus from "game/constants/game-status";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 15px 30px;
  max-height: 80%;
  overflow-y: scroll;
`;

const Text = styled.span`
  justify-self: center;
  ${props =>
    props.result === gameStatus.WIN &&
    css`
      color: ${props => props.theme.green};
      font-weight: 500;
    `}

  ${props =>
    props.result === gameStatus.LOSE &&
    css`
      color: ${props => props.theme.red};
      font-weight: 500;
    `}
`;

const Title = styled.span`
  font-weight: bold;
  border: 0px solid white;
  border-bottom-width: 5px;
  text-align: center;
`;

export default ({ gameRecords }) => {
  if (!gameRecords || gameRecords.length === 0) {
    return "There aren't any game records. Go play something.";
  }

  return (
    <Container>
      <Title>{"Rank".toUpperCase()}</Title>
      <Title>{"Turns".toUpperCase()}</Title>
      <Title>{"Mode".toUpperCase()}</Title>
      <Title>{"Result".toUpperCase()}</Title>
      {gameRecords.map(({ turns, shots, result, mode }, index) => (
        <Fragment key={index}>
          <Text>{index + 1}</Text>
          <Text>
            {shots}/{turns === Infinity || turns === null ? "∞" : turns}
          </Text>
          <Text>{mode.toUpperCase()}</Text>
          <Text result={result}>{result}</Text>
        </Fragment>
      ))}
    </Container>
  );
};
