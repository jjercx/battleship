import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import GameScreen from "game/components/game-screen";
import { ThemeProvider } from "styled-components";
import theme from "app/utils/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/utils/store";
import GameModeScreen from "game-mode/components/game-mode-screen";
import HomeScreen from "home/components/home-screen/home-screen";
import * as routes from "app/constants/routes";

const Battleship = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path={routes.GAME_MODE}>
              <GameModeScreen />
            </Route>
            <Route path={routes.GAME}>
              <GameScreen />
            </Route>
            <Route path={routes.HOME}>
              <HomeScreen />
            </Route>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default Battleship;
