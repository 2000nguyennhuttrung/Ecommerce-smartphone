import * as cartConstants from "./../constants/cart";

const initialState = [];

var findIndex = (products, id) => {
  let result = -1;
  if (products.length > 0) {
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
  }
  return result;
};

const reducer = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case cartConstants.FETCH_ALL_CART:
      state = action.payload.data;
      return [...state];

    case cartConstants.ADD_TO_CART:
      state.push(action.payload.product);
      return [...state];

    case cartConstants.DELETE_CART:
      // index = findIndex(state, action.payload.idCart);
      // state.splice(index - 1, 1);
      return [...state];

    case cartConstants.UPDATE_CART:
      index = findIndex(state, action.payload.id);
      state[index] = action.payload.product;
      return [...state];

    default:
      return state;
  }
};


export default reducer;
