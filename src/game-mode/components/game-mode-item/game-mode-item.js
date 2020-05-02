import React from "react";
import styled from "styled-components";
import ShipImage from "app/components/ship-image";

const Container = styled.div``;

const Title = styled.span``;

export default ({ text = "", ship, onClick, ...props }) => {
  return (
    <Container onClick={onClick} {...props}>
      {ship && <ShipImage ship={ship} />}
      <Title>{text.toUpperCase()}</Title>
    </Container>
  );
};
