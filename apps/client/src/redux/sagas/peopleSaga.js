import {call, put, takeEvery} from 'redux-saga/effects';
import {PEOPLE} from "../constants";
import {requestGetPeople} from "./requests";

export default function* watcherPeopleSaga() {
    yield takeEvery(PEOPLE.GET_ALL, workerPeopleSaga)
}

function* workerPeopleSaga() {
    try {
        const payload = yield call(requestGetPeople);
        yield put({type: PEOPLE.GET_ALL_SUCCESS, payload})
    } catch (error) {
        yield put({type: PEOPLE.GET_ALL_FAIL, error: error.toString()})
    }
}