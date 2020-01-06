import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

//SETUP MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

//STORE ARRAY OF VARIOUS MIDDLEWARES
const middlewares = [sagaMiddleware];

//CHROME EXT REDUX
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

//APPLY PERSIST-STORE
const persistor = persistStore(store);

export { store, persistor };
