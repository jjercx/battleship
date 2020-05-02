import React from "react";
import Header from "app/components/header";
import { ThemeProvider } from "styled-components";
import theme from "app/utils/theme";

export default {
  title: "game/Header",
  component: Header,
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
);
