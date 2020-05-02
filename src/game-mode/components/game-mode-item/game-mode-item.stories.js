import React from "react";
import GameModeItem from "./game-mode-item";
import GameMode from "game-mode/models/game-mode";

export default {
  title: "game-mode/Game Mode Item",
  component: GameModeItem,
};

export const Hard = () => (
  <GameModeItem text="Hard" gameMode={GameMode.hard()} />
);

export const Medium = () => (
  <GameModeItem text="Medium" gameMode={GameMode.medium()} />
);

export const Custom = () => (
  <GameModeItem text="Custom" gameMode={GameMode.custom()} />
);

export const Easy = () => (
  <GameModeItem text="Easy" gameMode={GameMode.easy()} />
);

export const EasySelected = () => (
  <GameModeItem
    text="Easy"
    gameMode={GameMode.easy()}
    selectedGameMode="easy"
  />
);
