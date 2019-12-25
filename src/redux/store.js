import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";

//SETUP MIDDLEWARE

//STORE ARRAY OF VARIOUS MIDDLEWARES
const middlewares = [];

//CHROME EXT REDUX
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
); //spread all middlewares

export default store;
