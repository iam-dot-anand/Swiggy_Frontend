import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "../Reducer/rootreducer";
import rootSaga from "../Saga/rootSaga";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware=createSagaMiddleware();

const store = configureStore(
    {
        reducer: combineReducers,
        middleware:()=>[sagaMiddleware]
    }
)
sagaMiddleware.run(rootSaga);
export default store;
