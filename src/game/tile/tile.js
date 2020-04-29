import React, { useState } from "react";
import styled from "styled-components";
import * as actions from "game/game.actions";
import { connect } from "react-redux";
import greenToken from "game/tile/assets/token-green.png";
import redToken from "game/tile/assets/token-red.png";
import { getCell } from "game/game.reducer";
import { EMPTY } from "app/constants/game";

const Container = styled.div`
  grid-column-start: ${props => props.col + 2};
  grid-row-start: ${props => props.row + 2};
`;

const Token = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => (props.empty ? greenToken : redToken)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Tile = ({ row, col, tileTouch, cell }) => {
  const [touched, setTouched] = useState(false);

  const handleClick = () => {
    if (!touched) {
      tileTouch({ row, col });
      setTouched(true);
    }
  };

  return (
    <Container onClick={handleClick} row={row} col={col}>
      {touched && <Token empty={cell === EMPTY} />}
    </Container>
  );
};

const mapStateToProps = (state, { row, col }) => ({
  cell: getCell(state, row, col),
});

export default connect(mapStateToProps, actions)(Tile);
