import * as accountConstants from "./../constants/account";

export const actLoginRequest = (credentials) => {
  return (dispatch) => {
    let username = credentials.username;
    let password = credentials.password;
    let status = null;
    return fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((res) => {
        status = res.status;
        return res.json();
      })
      .then((data) => {
        if (data.token) {
          dispatch(actLoginSuccess(username, password, data.token, status));
        } else {
          dispatch(actLoginFail(status));
        }
      })
      .catch((error) => dispatch(actLoginFail(error)));
  };
};

export const actLoginSuccess = (username, password, token, status) => {
  return {
    type: accountConstants.LOGIN_SUCCESS,
    payload: {
      username,
      password,
      token,
      status,
    },
  };
};

export const actLoginFail = (error) => {
  return {
    type: accountConstants.LOGIN_FAIL,
    payload: {
      error,
    },
  };
};

// ---------------------------------------------------------------------
// ---------------------------FETCH-USER-DETAIL--------------------------------
// ---------------------------------------------------------------------

export const actFetchUserDetailRequest = (username) => {
  return (dispatch) => {
    return fetch(`http://127.0.0.1:8000/accounts/account-detail/${username}`, {
      method: "GET",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(credentials),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(actFetchUserDetailSuccess(data));
      })
      .catch((error) => dispatch(actFetchUserDetailFail(error)));
  };
};

export const actFetchUserDetailSuccess = (data) => {
  return {
    type: accountConstants.FETCH_USER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const actFetchUserDetailFail = (error) => {
  return {
    type: accountConstants.FETCH_USER_FAIL,
    payload: {
      error,
    },
  };
};

export const actLogout = () => {
  return {
    type: accountConstants.LOGOUT,
    payload: {},
  };
};

// ---------------------------------------------------------------------
// ---------------------------UPDATE-INFO-------------------------------
// ---------------------------------------------------------------------

export const actInfoUpdateRequest = (username, data) => {
  return (dispatch) => {
    return fetch(`http://127.0.0.1:8000/accounts/account-update/${username}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(actInfoUpdateSuccess(data));
      })
      .catch((error) => dispatch(actInfoUpdateFail(error)));
  };
};

export const actInfoUpdateSuccess = (data) => {
  return {
    type: accountConstants.UPDATE_INFO_SUCCESS,
    payload: {
      data,
    },
  };
};

export const actInfoUpdateFail = (error) => {
  return {
    type: accountConstants.UPDATE_INFO_FAIL,
    payload: {
      error,
    },
  };
};

// ---------------------------------------------------------------------
// ---------------------------SIGN-UP-------------------------------
// ---------------------------------------------------------------------

export const actSignUpRequest = (data) => {
  return (dispatch) => {
    return fetch("http://127.0.0.1:8000/accounts/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        dispatch(actSignUpSuccess(res.status));
      })

      .catch((error) => dispatch(actSignUpFail(error)));
  };
};

export const actSignUpSuccess = (data) => {
  return {
    type: accountConstants.SIGNUP_SUCCESS,
    payload: {
      data,
    },
  };
};

export const actSignUpFail = (error) => {
  return {
    type: accountConstants.SIGNUP_FAIL,
    payload: {
      error,
    },
  };
};
