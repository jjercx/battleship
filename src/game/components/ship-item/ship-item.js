import React from "react";
import styled, { css } from "styled-components";
import assets from "./assets";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 5px 10px;
`;

const ShipImage = styled.img`
  --size: 20px;
  height: calc(var(--size));
  margin-right: 10px;
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

const HitPoint = styled.div`
  --size: 10px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  margin: 0px 2.5px;
  background-color: ${props =>
    props.isHit ? props.theme.red : props.theme.green};
`;

export default ({ ship }) => {
  if (!ship) {
    return null;
  }

  return (
    <Container>
      <ShipImage
        size={ship.size}
        src={assets[ship.type]}
        isAlive={ship.isAlive()}
      ></ShipImage>
      {[...Array(ship.size)].map((_, i) => (
        <HitPoint key={i} isHit={ship.hits > i}></HitPoint>
      ))}
    </Container>
  );
};