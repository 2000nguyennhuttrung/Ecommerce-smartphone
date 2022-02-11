import * as accountConstants from "./../constants/account";

const initialState = {
  username: "",
  password: "",
  token: "",
  status: null,
  accountInfo: {},
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
    case accountConstants.LOGIN_SUCCESS:
      state = action.payload;
      localStorage.setItem("account", JSON.stringify(action.payload));

      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        token: action.payload.token,
        status: action.payload.status,
      };

    case accountConstants.LOGIN_FAIL:
      state = action.payload;
      alert("Sai tên đăng nhập hoặc mật khẩu.");
      return {
        username: "",
        password: "",
        token: "",
        status: action.payload.error,
      };

    case accountConstants.FETCH_USER_SUCCESS:
      let data = {
        username: action.payload.data.username,
        first_name: action.payload.data.first_name,
        last_name: action.payload.data.last_name,
        email: action.payload.data.email,
      };
      return {
        ...state,
        accountInfo: data,
      };

    case accountConstants.UPDATE_INFO_SUCCESS:
      return {
        ...state,
        status: 200,
      };

    case accountConstants.SIGNUP_SUCCESS:
      if (action.payload.data === 201) {
        alert("Đăng ký tài khoản thành công!");
        window.location.replace("/");
      } else {
        alert("Tài khoản này đã được đăng ký.");
      }
      return {
        ...state,
      };
    case accountConstants.UPDATE_INFO_FAIL:
    case accountConstants.SIGNUP_FAIL:
    case accountConstants.FETCH_USER_FAIL:
      return {
        ...state,
        status: 400,
      };

    case accountConstants.LOGOUT:
      localStorage.removeItem("account");
      return {
        username: "",
        password: "",
        token: "",
        status: null,
        accountInfo: {},
      };

    default:
      return state;
  }
};

export default reducer;
