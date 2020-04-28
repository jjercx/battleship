import React from "react";
import Stat from "game/stat";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "app/theme";

export default {
  title: "Stat",
  component: Stat,
  excludeStories: /.*Data$/,
};

const Container = styled.div`
  width: 80px;
  height: 100px;
  display: grid;
`;

export const statData = {
  title: "Title",
  value: 10,
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Stat {...statData} />
    </Container>
  </ThemeProvider>
);
