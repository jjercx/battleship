import React from "react";
import { Switch, Route } from "react-router-dom";
import GameScreen from "game/game-screen";
import { ThemeProvider } from "styled-components";
import theme from "app/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/store";

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
          <Route path="/">
            <GameScreen />
          </Route>
        </Switch>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default App;
