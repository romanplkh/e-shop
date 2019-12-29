import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import thunk from 'redux-thunk';

//SETUP MIDDLEWARE

//STORE ARRAY OF VARIOUS MIDDLEWARES
const middlewares = [thunk];

//CHROME EXT REDUX
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
); 

//APPLY PERSIST-STORE
const persistor = persistStore(store);

export { store, persistor };
