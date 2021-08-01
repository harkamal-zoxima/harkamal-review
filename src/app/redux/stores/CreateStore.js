import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

const configureStore = (rootReducer, rootSaga, history) => {
  const middleware = [];
  const enhancers = [];
  
  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  // middleware.push(routerMiddleware(history));

  if (history) {
    enhancers.push(applyMiddleware(...middleware, createLogger()));
  } else {
    enhancers.push(applyMiddleware(...middleware, createLogger()));
  }

  const store = createStore(rootReducer, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return { store };
};

export default configureStore