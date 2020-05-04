import React from "react";
import { GameScreen } from "./game-screen";
import renderer from "react-test-renderer";
import { createStore } from "redux";
import rootReducer from "app/redux/reducers";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

describe("<GameScreen />", () => {
  describe("with initialState", () => {
    it("matches snapshot", () => {
      const store = createStore(rootReducer);
      const tree = renderer
        .create(
          <Provider store={store}>
            <MemoryRouter>
              <GameScreen />
            </MemoryRouter>
          </Provider>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
