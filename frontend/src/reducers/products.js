import * as productContants from "./../constants/products";

const initialState = {
  listProduct: [],
  productDetail: [],
};

let id = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case productContants.FETCH_PRODUCTS:
      return {
        ...state,
        listProduct: [],
      };

    case productContants.FETCH_PRODUCT_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        listProduct: data,
      };

    case productContants.FETCH_PRODUCT_FAILED:
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listProduct: [],
      };

    case productContants.FILTER_PRODUCTS_SUCCESS:
      const dataFiltered = action.payload.data;
      return {
        ...state,
        listProduct: dataFiltered,
      };

    case productContants.GET_PRODUCTS_BY_ID:
      const { id } = action.payload;
      return {
        ...state,
        id: id,
      };

    case productContants.GET_PRODUCTS_BY_ID_SUCCESS:
      const dataProductOfId = action.payload;

      return {
        ...state,
        productDetail: dataProductOfId.data,
      };

    case productContants.SEARCH_PRODUCTS:
      const dataSearch = action.payload.product;
      return {
        ...state,
        listProduct: dataSearch,
      };

    case productContants.ASC_PRODUCTS:
      const dataASC = action.payload.product;
      return {
        ...state,
        listProduct: dataASC,
      };

    case productContants.DESC_PRODUCTS:
      const dataDESC = action.payload.product;
      return {
        ...state,
        listProduct: dataDESC,
      };

    case productContants.PAGINATION_PRODUCTS:
      const dataPagination = action.payload.product;
      return {
        ...state,
        listProduct: dataPagination,
      };
    default:
      return state;
  }
};

export default reducer;
