import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootSaga from "app/redux/sagas";
import rootReducer from "app/redux/reducers";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const persistConfig = {
  key: "root",
  storage,
  timeout: 0,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
