import React, { useState } from "react";
import styled from "styled-components";
import * as actions from "game/redux/game.actions";
import { connect } from "react-redux";
import greenToken from "./assets/token-green.png";
import redToken from "./assets/token-red.png";
import { getCell } from "game/redux/game.reducer";
import { EMPTY } from "app/constants/game";

const Container = styled.div`
  grid-column-start: ${props => props.col + 2};
  grid-row-start: ${props => props.row + 2};
  background-color: ${props => props.theme.green}22;
  box-shadow: inset 0px 0px 0px 1px ${props => props.theme.green};
  box-sizing: border-box;
`;

const Token = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => (props.empty ? greenToken : redToken)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Tile = ({ row, col, tileTouch, cell, player }) => {
  const [touched, setTouched] = useState(false);

  const handleClick = () => {
    if (!touched) {
      tileTouch({ row, col, player });
      setTouched(true);
    }
  };

  return (
    <Container onClick={handleClick} row={row} col={col} data-testid="tile">
      {touched && <Token empty={cell === EMPTY} data-testid="token" />}
    </Container>
  );
};

const mapStateToProps = (state, { row, col, player }) => ({
  cell: getCell(state, row, col, player),
});

export default connect(mapStateToProps, actions)(Tile);
