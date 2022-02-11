import * as billConstants from "./../constants/bill";

export const actBillRequest = (username) => {
  return (dispatch) => {
    return fetch(`http://127.0.0.1:8000/bills/bill-filter/?search=${username}`, {
      method: "GET",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(credentials),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(actBillSuccess(res));
      })
      .catch((error) => dispatch(actBillFail(error)));
  };
};

export const actBillSuccess = (data) => {
  return {
    type: billConstants.FETCH_BILL_SUCCESS,
    payload: {
      data
    },
  };
};

export const actBillFail = (error) => {
  return {
    type: billConstants.FETCH_BILL_FAIL,
    payload: {
      error,
    },
  };
};

//------------------------------------------------------
//---------------------ADD-BILL-------------------------
//------------------------------------------------------

export const actAddToBillRequest = (data) => {
  return (dispatch) => {
    return fetch("http://127.0.0.1:8000/bills/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(actAddToBillSuccess(res));
      })
      .catch((error) => dispatch(actAddToBillFail(error)));
  };
};

export const actAddToBillSuccess = (data) => {
  return {
    type: billConstants.ADD_TO_BILL_SUCCESS,
    payload: {
      data
    },
  };
};

export const actAddToBillFail = (error) => {
  return {
    type: billConstants.ADD_TO_BILL_FAIL,
    payload: {
      error,
    },
  };
};
