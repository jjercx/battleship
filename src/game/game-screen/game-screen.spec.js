import React from "react";
import GameScreen from "./game-screen";
import renderer from "react-test-renderer";
import { createStore } from "redux";
import rootReducer from "app/reducers";
import { Provider } from "react-redux";

describe("<GameScreen />", () => {
  describe("with initialState", () => {
    it("matches snapshot", () => {
      const store = createStore(rootReducer);
      const tree = renderer
        .create(
          <Provider store={store}>
            <GameScreen />
          </Provider>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
