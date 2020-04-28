import styled from "styled-components";

const Tile = styled.div`
  background-color: orangered;
  grid-column-start: ${(props) => props.col};
  grid-row-start: ${(props) => props.row};
`;

export default Tile;