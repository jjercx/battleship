import React from "react";
import Stat from "game/stat";
import styled from "styled-components";

export default {
  title: "Stat",
  component: Stat,
  excludeStories: /.*Data$/,
};

const Container = styled.div`
  width: 120px;
  height: 150px;
  display: flex;
`;

export const statData = {
  title: "Title",
  value: 10,
};

export const Default = () => (
  <Container>
    <Stat {...statData} />
  </Container>
);

export const Colored = () => (
  <Container>
    <Stat {...statData} color="orange" />
  </Container>
);
