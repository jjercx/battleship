import React from "react";
import Tile from "game/Tile";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Letter = styled.span`
  color: blue;
  font-weight: bold;
  place-self: center;
  grid-column-start: ${(props) => props.col};
  grid-row-start: ${(props) => props.row};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 4vmin repeat(10, 8vmin);
  grid-template-rows: 4vmin repeat(10, 8vmin);
  grid-gap: 2px;
`;

const A_CHAR_CODE = 65;

const GameScreen = ({ size = 10 }) => (
  <Container>
    <Grid>
      {[...Array(size)].map((_, col) => (
        <Letter row={1} col={col + 2}>
          {col + 1}
        </Letter>
      ))}
      {[...Array(size)].map((_, row) => (
        <Letter col={1} row={row + 2}>
          {String.fromCharCode(A_CHAR_CODE + row)}
        </Letter>
      ))}
      {[...Array(size)].map((_, row) =>
        [...Array(size)].map((_, col) => <Tile row={row + 2} col={col + 2} />)
      )}
    </Grid>
  </Container>
);

export default GameScreen;
