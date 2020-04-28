import React from "react";
import { Switch, Route } from "react-router-dom";
import GameScreen from "game/game-screen";

const App = () => (
  <Switch>
    <Route path="/">
      <GameScreen />
    </Route>
  </Switch>
);

export default App;
