import * as billConstants from "./../constants/bill";

const initialState = {
  listBill: [],
  count: 0,
};

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
    case billConstants.FETCH_BILL_SUCCESS:
      return {
        ...state,
        listBill: action.payload.data.results,
        count: action.payload.data.count
      };

    case billConstants.FETCH_BILL_FAIL:
      state = action.payload;
      return {
        ...state
      };

    case billConstants.ADD_TO_BILL_SUCCESS:
      return {
        ...state
      };

    case billConstants.ADD_TO_BILL_FAIL:
      return {
        ...state,
        status: 400
      };

    default:
      return state;
  }
};

export default reducer;
