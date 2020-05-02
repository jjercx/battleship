import React from "react";
import GameModeItem from "./game-mode-item";
import Ship from "game/models/ship";

export default {
  title: "game-mode/Game Mode Item",
  component: GameModeItem,
};

export const Hard = () => (
  <GameModeItem text="Hard" ship={new Ship({ size: 4 })} />
);

export const Medium = () => (
  <GameModeItem text="Medium" ship={new Ship({ size: 3 })} />
);

export const Custom = () => (
  <GameModeItem text="Custom" ship={new Ship({ size: 2 })} />
);

export const Easy = () => (
  <GameModeItem text="Easy" ship={new Ship({ size: 1 })} />
);
