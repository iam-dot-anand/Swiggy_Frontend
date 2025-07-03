const initialState = {
  msg: "",
  success: false, 
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        msg: "",
        success: false,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        msg: action.responseData.msg,
        success: action.responseData.success,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        msg: action.error,
        success: false, 
      };

    case "LOGOUT_REQUEST":
      localStorage.removeItem("Token");
      localStorage.removeItem("userName");
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
