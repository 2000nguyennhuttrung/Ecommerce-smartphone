import { combineReducers } from "redux";
import uiReducer from './ui';
import productReducer from './products';
import cartReducer from './cart';
import accountReducer from './accounts';
import billReducer from './bills';

const rootReducer = combineReducers({
  ui: uiReducer,
  products: productReducer,
  cart: cartReducer,
  accounts: accountReducer,
  bills: billReducer,
});

export default rootReducer;
