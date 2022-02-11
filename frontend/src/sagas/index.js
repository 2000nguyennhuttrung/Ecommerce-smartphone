import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
} from "redux-saga/effects";
import * as productTypes from "./../constants/products";

import { getList, getListById } from "./../apis/products";
import { STATUS_CODE } from "./../constants/index";

import {
  fetchListProductSuccess,
  fetchListProductFailed,
  filterProductSuccess,
  getProductByIdSuccess,
} from "./../actions/products";

import { showLoading, hideLoading } from "./../actions/ui";

function* watchFetchListProductAction() {
  while (true) {
    yield take(productTypes.FETCH_PRODUCTS);
    yield put(showLoading());
    const res = yield call(getList);
    const { status, data } = res;

    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListProductSuccess(data));
    } else {
      yield put(fetchListProductFailed(data));
    }

    yield delay(1000);
    yield put(hideLoading());
  }
}

function* filterProductSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  const list = yield select((state) => state.products.listProduct);
  const filteredProduct = list.filter((product) => {
    return product.name
      .trim()
      .toLowerCase()
      .includes(keyword.trim().toLowerCase());
  });
  yield put(filterProductSuccess(filteredProduct));
}

// function* getProductByIdSaga({ payload }) {
//   const { id } = payload;
//   console.log(id);
// }

function* rootSaga() {
  yield fork(watchFetchListProductAction);
  yield takeLatest(productTypes.FILTER_PRODUCTS, filterProductSaga);
  // yield takeLatest(productTypes.GET_PRODUCTS_BY_ID, getProductByIdSaga);
}

export default rootSaga;
