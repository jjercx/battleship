import React from "react";
import ShipItem from "game/components/ship-item";
import Ship from "game/models/ship";
import { ThemeProvider } from "styled-components";
import theme from "app/utils/theme";

export default {
  title: "Ship Item",
  component: ShipItem,
};

export const Aircraft = () => (
  <ThemeProvider theme={theme}>
    <ShipItem ship={new Ship(4)} />
  </ThemeProvider>
);

export const Battleship = () => (
  <ThemeProvider theme={theme}>
    <ShipItem ship={new Ship(3)} />
  </ThemeProvider>
);

export const Submarine = () => (
  <ThemeProvider theme={theme}>
    <ShipItem ship={new Ship(2)} />
  </ThemeProvider>
);

export const Carriership = () => (
  <ThemeProvider theme={theme}>
    <ShipItem ship={new Ship(1)} />
  </ThemeProvider>
);
