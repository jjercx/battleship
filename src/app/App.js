import React from "react";
import { Switch, Route } from "react-router-dom";
import Game from "game/GameScreen";

const App = () => (
  <Switch>
    <Route path="/">
      <Game />
    </Route>
  </Switch>
);

export default App;
