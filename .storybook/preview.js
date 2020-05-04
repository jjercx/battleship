import React from "react";
import { addDecorator } from "@storybook/react";
import { store, persistor } from "app/redux/store";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import theme from "app/utils/theme";
import "./index.css";
import gridBg from "./grid.jpg";
import styled from "styled-components";

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {storyFn()}
      </PersistGate>
    </Provider>
  </ThemeProvider>
));

const TiledBackground = styled.div`
  background-image: url(${gridBg});
  height: 100vh;
  width: 100vw;
`;

addDecorator(storyFn => <TiledBackground>{storyFn()}</TiledBackground>);
