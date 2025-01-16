// const initialState = {data:{},err:{}}
const initialState = {msg:"",success:""}
export const loginReducer = (state=initialState, action) => {
  console.log("login action", action.responseData);
  console.log("login state", state);
  switch (action.type) {
    case "LOGIN_REQUEST":
        console.log();
      return (state);

    case "LOGIN_SUCCESS":
      return ({...state,msg:action.responseData.msg,success:action.responseData.success});

    case "LOGIN_FAILURE":
      // return ({...state,msg:loginData.msg,success:loginData.success})
      return ({...state,msg:action.error});
      
    case "LOGOUT_REQUEST":
      localStorage.removeItem("Token"); 
      localStorage.removeItem("userName");
      return (state);

    default:
      return state;
  }
};
