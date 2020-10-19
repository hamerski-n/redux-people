import {all, fork} from "redux-saga/effects";
import peopleSaga from './peopleSaga';
import personSaga from "./personSaga";
import errorSaga from "./errorSaga";

export function* rootSaga() {
    yield all([fork(peopleSaga),fork(personSaga), fork(errorSaga)])
}