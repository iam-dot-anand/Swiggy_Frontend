import {takeEvery,takeLatest} from "redux-saga/effects"
import productsSaga from "./productSaga";
import cuisineSaga from "./cuisineSaga";
import LoginSaga from "./Login";
import SignupSaga from "./Signup";



function* rootSaga(){
    yield takeLatest("LOGIN_REQUEST",LoginSaga);
    yield takeEvery("SIGNUP_REQUEST",SignupSaga);
    yield takeEvery("ProductToCart",productsSaga);
    yield takeEvery("CuisineByID",cuisineSaga);
    
}
export default rootSaga;