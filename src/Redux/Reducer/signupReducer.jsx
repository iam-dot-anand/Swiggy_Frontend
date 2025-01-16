    export const signupReducer = (state = {}, action) => {
        // console.log("signup reducer ", action)
    switch (action.type) {
      case "SIGNUP_SUCCESS":
        return ({state}, action.result);
      case "SIGNUP_FAILURE":
        return ({state}, action.error);
      default:
        return state;
    }
  };
  