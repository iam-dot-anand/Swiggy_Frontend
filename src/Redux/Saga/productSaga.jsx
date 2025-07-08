import {put} from "redux-saga/effects"

function* productsSaga() {
  let responseData = yield fetch("http://localhost:4000/restaurant");
  let {result} = yield responseData.json();

  let payload  = result
  // console.log("this saga data",payload);
  
  yield put({ type: "SetProductData", payload });
}
export default productsSaga;