import React from "react";
import Tile from "game/components/tile";
import styled from "styled-components";
import radar from "./assets/radargrid.png";
import { A_CHAR_CODE } from "app/constants/game";

const Grid = styled.div`
  --square-size: 8vmin;
  margin: 10px;
  display: grid;
  grid-template-columns: calc(var(--square-size) / 2) repeat(
      ${props => props.size},
      var(--square-size)
    );
  grid-template-rows: calc(var(--square-size) / 2) repeat(
      ${props => props.size},
      var(--square-size)
    );
`;

const Background = styled.div`
  background-image: url(${radar});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-column: 2 / span ${props => props.size};
  grid-row: 2 / span ${props => props.size};
`;

const Letter = styled.span`
  color: ${props => props.theme.green};
  font-weight: bold;
  place-self: center;
  grid-column-start: ${props => props.col};
  grid-row-start: ${props => props.row};
`;

export default ({ size }) => {
  if (!size) {
    return null;
  }

  return (
    <Grid size={size}>
      <Background size={size} />
      {[...Array(size)].map((_, col) => (
        <Letter key={col} row={1} col={col + 2}>
          {col + 1}
        </Letter>
      ))}
      {[...Array(size)].map((_, row) => (
        <Letter key={row} col={1} row={row + 2}>
          {String.fromCharCode(A_CHAR_CODE + row)}
        </Letter>
      ))}
      {[...Array(size)].map((_, row) =>
        [...Array(size)].map((_, col) => (
          <Tile row={row} col={col} key={`${row}-${col}`} />
        ))
      )}
    </Grid>
  );
};
