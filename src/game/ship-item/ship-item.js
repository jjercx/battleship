import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 5px 10px;
`;

const ShipImage = styled.img`
  --size: 20px;
  height: calc(var(--size));
  margin-right: 10px;
`;

const HitPoint = styled.div`
  --size: 15px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  border: 1px solid ${(props) => (props.isHit ? "red" : "#333")};
  margin: 0px 2.5px;
  background-color: ${(props) => (props.isHit ? "red" : "white")};
`;

export default ({ ship }) => (
  <Container>
    <ShipImage size={ship.size} src={ship.image}></ShipImage>
    {[...Array(ship.size)].map((_, i) => (
      <HitPoint key={i} isHit={ship.hits > i}></HitPoint>
    ))}
  </Container>
);
