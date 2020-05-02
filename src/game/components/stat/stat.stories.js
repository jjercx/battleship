import React from "react";
import Stat from "game/components/stat";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "app/utils/theme";

export default {
  title: "game/Stat",
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
