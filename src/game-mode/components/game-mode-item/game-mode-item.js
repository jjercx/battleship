import React from "react";
import styled, { css } from "styled-components";
import ShipImage from "app/components/ship-image";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    .ship-container {
      background-color: ${props => props.theme.green}22;
    }
  }
`;

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const ShipContainer = styled.div`
  width: 150px;
  height: 100px;
  border: 2px solid ${props => props.theme.green};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${props =>
    props.isSelected &&
    css`
      background-color: ${props => props.theme.green}22;
    `}

  .ship-image {
    flex: 1;
    object-fit: contain;
    width: 80%;
  }
`;

const Title = styled.span`
  margin: 10px;
  font-weight: bold;
  color: ${props => props.theme.green};
  font-size: 24px;
`;

const TurnsLabel = styled.span`
  margin: 10px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

export default ({
  text = "",
  onClick,
  gameMode,
  selectedGameMode,
  ...props
}) => {
  const getTurnLabel = () => `${gameMode.turnLabel ?? gameMode.turns} turns`;
  if (!gameMode) {
    return null;
  }

  return (
    <Container onClick={onClick} {...props}>
      <Content>
        <ShipContainer
          className="ship-container"
          isSelected={selectedGameMode === gameMode.name}
        >
          <ShipImage ship={gameMode.ship} className="ship-image" />
          <TurnsLabel>{getTurnLabel()}</TurnsLabel>
        </ShipContainer>
        <Title>{text.toUpperCase()}</Title>
      </Content>
    </Container>
  );
};
