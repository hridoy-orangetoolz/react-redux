import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../reducers/rootReducer";
import rootMiddleware from "../middlewares/rootMiddleware";
import createSagaMiddleware from "redux-saga";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootMiddleware);

export default store;
