import * as productContants from "./../constants/products";
import callApi from './../apis/apiCaller';
import { showLoading, hideLoading } from "./ui";

export const fetchProduct = () => {
  return {
    type: productContants.FETCH_PRODUCTS,
  };
};

export const fetchListProductSuccess = (data) => {
  return {
    type: productContants.FETCH_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListProductFailed = (error) => {
  return {
    type: productContants.FETCH_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};

export const filterProducts = (keyword) => {
  return {
    type: productContants.FILTER_PRODUCTS,
    payload: {
      keyword,
    },
  };
};

export const filterProductSuccess = (data) => {
  return {
    type: productContants.FILTER_PRODUCTS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getProductByIdSuccess = (data) => {
  return {
    type: productContants.GET_PRODUCTS_BY_ID_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getProductById = (id) => {
  return (dispatch) => {
    return callApi(`products/product-detail/${id}`, "GET", null).then((res) => {
      dispatch(showLoading());
      dispatch(getProductByIdSuccess(res.data));
      setTimeout(() => dispatch(hideLoading()), 1000);
    });
  };
};

export const actSearchProductsRequest = (param) => {
  return (dispatch) => {
    return fetch(`http://127.0.0.1:8000/products/product-search/?search=${param}`).then((res) => {
      return res.json();
    }).then(data => {
      dispatch(actSearchProducts(data.results));
    });
  };
};

export const actSearchProducts = (product) => {
  return {
    type: productContants.SEARCH_PRODUCTS,
    payload: {
      product,
    },
  };
};

export const actASCOrderingProductsRequest = (param) => {
  return (dispatch) => {
    return fetch(`http://127.0.0.1:8000/products/product-search/?ordering=price&search=${param}`).then((res) => {
      return res.json();
    }).then(data => {
      dispatch(actASCOrderingProducts(data.results));
    });
  };
};

export const actASCOrderingProducts = (product) => {
  return {
    type: productContants.ASC_PRODUCTS,
    payload: {
      product,
    },
  };
};

export const actDESCOrderingProductsRequest = (param) => {
  return (dispatch) => {
    return fetch(`http://127.0.0.1:8000/products/product-search/?ordering=-price&search=${param}`).then((res) => {
      return res.json();
    }).then(data => {
      dispatch(actDESCOrderingProducts(data.results));
    });
  };
};

export const actDESCOrderingProducts = (product) => {
  return {
    type: productContants.DESC_PRODUCTS,
    payload: {
      product,
    },
  };
};


export const actPaginationProductsRequest = (param) => {
  return (dispatch) => {
    return fetch(`http://127.0.0.1:8000/products/product-search/?page=${param}`).then((res) => {
      return res.json();
    }).then(data => {
      dispatch(actPaginationProducts(data.results));
    });
  };
};

export const actPaginationProducts = (product) => {
  return {
    type: productContants.PAGINATION_PRODUCTS,
    payload: {
      product,
    },
  };
};
