import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./auth/reducer";
import { productsReducer } from "./products/reducer";
import { userReducer } from "./user/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  user: userReducer,
});

const configureStore = () => {
  const enhancer = composeWithDevTools(applyMiddleware(thunk));
  return createStore(rootReducer, enhancer);
};

const store = configureStore();

export default store;
