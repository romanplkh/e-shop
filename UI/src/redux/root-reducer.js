import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import mainDisplayPanelReducer from "./main-display-panel/main-display-panel.reducer";
import shopInventoryReducer from "./shop/shop-inventory.reducer";
import { persistReducer } from "redux-persist";

//To use LocalStorage
import storage from "redux-persist/lib/storage";
//To use SessionStorage
//import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage, //what type of storage Local/Session
  whitelist: ["cart"] //What types of state we want to be persisting
};

//HOLDS ALL STATE OF THE APP
//COMBINES ALL STATES TOGETHER
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  mainDisplayPanel: mainDisplayPanelReducer,
  shop: shopInventoryReducer
});

export default persistReducer(persistConfig, rootReducer);
