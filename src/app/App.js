import React from "react";
import { Switch, Route } from "react-router-dom";
import GameScreen from "game/game-screen";
import { ThemeProvider } from "styled-components";
import theme from "app/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/">
        <GameScreen />
      </Route>
    </Switch>
  </ThemeProvider>
);

export default App;
