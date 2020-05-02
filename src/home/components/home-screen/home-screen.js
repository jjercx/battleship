import React from "react";
import styled from "styled-components";
import Title from "home/components/title";
import Button from "home/components/button";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    margin-bottom: 30px;
  }
`;

export default function HomeScreen() {
  return (
    <Container>
      <Content>
        <Title text="battleship" className="title"></Title>
        <Button text="new game"></Button>
        <Button text="leaderboard"></Button>
        <Button text="options"></Button>
      </Content>
    </Container>
  );
}
