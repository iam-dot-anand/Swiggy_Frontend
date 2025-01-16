import { put, call } from "redux-saga/effects";

function* LoginSaga(action) {
  console.log("action-saga", action);
  const { email, password } = action.data;
  try {
    const response = yield call(fetch, "http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const responseData = yield response.json();   
    localStorage.setItem('Token',responseData.jwtToken);
    localStorage.setItem('userName',responseData.name) ;
    if(!responseData.success) yield put({ type: "LOGIN_FAILURE", error: responseData }); 
    else yield put(
      { type: "LOGIN_SUCCESS", responseData });

  } catch (error) {
    yield put({ type: "LOGIN_FAILURE", error: {msg:'API failure', success: false} }); 
  }
}

export default LoginSaga;


