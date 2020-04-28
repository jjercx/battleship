import React from "react";
import Tile from "game/tile";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 4vmin repeat(10, 8vmin);
  grid-template-rows: 4vmin repeat(10, 8vmin);
  grid-gap: 2px;
`;

const Letter = styled.span`
  color: blue;
  font-weight: bold;
  place-self: center;
  grid-column-start: ${(props) => props.col};
  grid-row-start: ${(props) => props.row};
`;

const A_CHAR_CODE = 65;

export default ({ size }) => (
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
);
