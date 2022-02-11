import * as cartConstants from "./../constants/cart";
import callApi from "./../apis/apiCaller";
import { showLoading, hideLoading } from "./ui";

// export const addProductToCartRequest = (id) => {
//   return (dispatch) => {
//     dispatch(showLoading());
//     return callApi(`products/${id}`, "GET", null)
//       .then((res) => {
//         dispatch(addProductToCartSuccess(res.data));
//       })
//       .catch((error) => {
//         dispatch(addProductToCartFailed(error));
//       })
//       .finally(() => {
//         setTimeout(() => dispatch(hideLoading()), 1000);
//       });
//   };
// };

// export const addProductToCartSuccess = (data) => {
//   return {
//     type: cartConstants.ADD_PRODUCT_TO_CART_SUCCESS,
//     payload: {
//       data,
//     },
//   };
// };

// export const addProductToCartFailed = (error) => {
//   return {
//     type: cartConstants.ADD_PRODUCT_TO_CART_FAILED,
//     payload: {
//       error,
//     },
//   };
// };

// ----------------------------Add cart------------------------------
export const actFetchAllCartRequest = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return callApi("carts/cart-list", "GET", null)
      .then((res) => {
        dispatch(actFetchAllCart(res.data));
      })
      .finally(() => {
        setTimeout(() => dispatch(hideLoading()), 1000);
      });
  };
};

export const actFetchAllCart = (data) => {
  return {
    type: cartConstants.FETCH_ALL_CART,
    payload: {
      data,
    },
  };
};


export const actAddToCartRequest = (product) => {
  return (dispatch) => {
    return callApi("carts/cart-create/", "POST", product).then((res) => {
      dispatch(actAddToCart(product));
    });
  };
};

export const actAddToCart = (product) => {
  return {
    type: cartConstants.ADD_TO_CART,
    payload: {
      product,
    },
  };
};

export const actDeleteCart = (id) => {
  return {
    type: cartConstants.DELETE_CART,
    payload: {
      id,
    },
  };
};

export const actDeleteCartRequest = (id) => {
  return (dispatch) => {
    return callApi(`carts/cart-delete/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteCart(id));
    });
  };
};


export const actUpdateCartRequest = (id, quantity, product) => {
  product.quantity = product.quantity + quantity;
  return (dispatch) => {
    return callApi(`carts/cart-update/${id}`, "PUT", product).then((res) => {
      dispatch(actUpdateCart(id, quantity, product));
    });
  };
};

export const actUpdateCart = (id, quantity, product) => {
  let Quantity = quantity;
  Quantity === 1 ? 1 : -1;
  return {
    type: cartConstants.UPDATE_CART,
    payload: {
      id,
      Quantity,
      product,
    },
  };
};
