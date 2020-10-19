import {put, takeEvery} from 'redux-saga/effects';
import {ERRORS} from "../constants";


export default function* watcherErrorCloseSaga() {
    yield takeEvery(ERRORS.CLOSE, workerErrorCloseSaga)
}

function* workerErrorCloseSaga() {
    yield put({type: ERRORS.CLOSE_SUCCESS})
}