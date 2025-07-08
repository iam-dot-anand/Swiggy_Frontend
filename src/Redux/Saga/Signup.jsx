import { call, put } from "redux-saga/effects";

function* SignupSaga(action) {
  const { name, email, password } = action.data;
  try {
    const response = yield call(fetch, "https://swiggy-backend-hsw4.onrender.com/auth/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const result = yield response.json();
    // console.log("signup saga",result)

    if (!result.success) {
      yield put({ type: "SIGNUP_FAILURE", error: result });
    } else {
      yield put({ type: "SIGNUP_SUCCESS", result });
    }
  } catch (err) {
    yield put({
      type: "SIGNUP_FAILURE",
      error: { msg: "API failure", success: false },
    });
  }
}

export default SignupSaga;
