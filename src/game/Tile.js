import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 10%;
  height: 100%;
  background-color: orangered;
  margin: 2px;
  position: relative;

  &:after {
    content: "";
    float: left;
    padding-top: 100%;
  }
`;

const Tile = () => <Square />;

export default Tile;
