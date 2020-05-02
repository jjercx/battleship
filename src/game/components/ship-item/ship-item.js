import React from "react";
import styled from "styled-components";
import ShipImage from "app/components/ship-image";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 5px 10px;

  .ship-image {
    margin-right: 10px;
  }
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
      <ShipImage ship={ship} className="ship-image" />
      {[...Array(ship.size)].map((_, i) => (
        <HitPoint key={i} isHit={ship.hits > i}></HitPoint>
      ))}
    </Container>
  );
};
