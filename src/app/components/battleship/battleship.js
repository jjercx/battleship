import React from "react";
import { Switch, Route } from "react-router-dom";
import GameScreen from "game/components/game-screen";
import { ThemeProvider } from "styled-components";
import theme from "app/utils/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/utils/store";
import { BrowserRouter } from "react-router-dom";

const Battleship = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <GameScreen />
            </Route>
          </Switch>{" "}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default Battleship;
