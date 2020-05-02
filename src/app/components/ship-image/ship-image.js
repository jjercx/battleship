import React from "react";
import styled, { css } from "styled-components";
import assets from "./assets";

const ShipImage = styled.img`
  --size: 20px;
  height: calc(var(--size));
  ${props =>
    props.isAlive
      ? css`
          filter: brightness(0) saturate(100%) invert(48%) sepia(67%)
            saturate(3538%) hue-rotate(105deg) brightness(100%) contrast(87%);
        `
      : css`
          filter: brightness(0) saturate(100%) invert(12%) sepia(99%)
            saturate(5598%) hue-rotate(348deg) brightness(87%) contrast(109%);
        `}
`;

export default ({ ship, ...props }) => (
  <ShipImage {...props} src={assets[ship.type]} isAlive={ship.isAlive()} />
);
