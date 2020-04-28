import React from "react";
import Header from "app/header";
import { ThemeProvider } from "styled-components";
import theme from "app/theme";

export default {
  title: "Header",
  component: Header,
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
);
