import React from "react";
import Tile from "game/tile";
import styled from "styled-components";
import radar from "./assets/radargrid.png";

const Grid = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: 4vmin repeat(10, 8vmin);
  grid-template-rows: 4vmin repeat(10, 8vmin);
`;

const Background = styled.div`
  background-image: url(${radar});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-column: 2 / span 10;
  grid-row: 2 / span 10;
`;

const Letter = styled.span`
  color: ${props => props.theme.green};
  font-weight: bold;
  place-self: center;
  grid-column-start: ${props => props.col};
  grid-row-start: ${props => props.row};
`;

const A_CHAR_CODE = 65;

export default ({ size }) => (
  <Grid>
    <Background />
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
        <Tile row={row + 2} col={col + 2} key={`${row}-${col}`} />
      ))
    )}
  </Grid>
);
