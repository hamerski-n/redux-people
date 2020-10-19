import {call, put, takeEvery} from 'redux-saga/effects';
import {PERSON} from "../constants";
import {requestCreatePersonSaga, requestGetPerson} from "./requests";

export default function* watcherPersonSaga() {
    yield takeEvery(PERSON.GET_BY_ID, workerGetPersonSaga);
    yield takeEvery(PERSON.CREATE, workerCreatePersonSaga);
}

function* workerGetPersonSaga({payload}) {
    try {
        const person = yield call(requestGetPerson, payload);
        yield put({type: PERSON.GET_BY_ID_SUCCESS, payload: person})
    } catch (error) {
        yield put({type: PERSON.GET_BY_ID_FAIL, error: error.toString()})
    }
}

function* workerCreatePersonSaga({payload}) {
    try {
        const person = yield call(requestCreatePersonSaga, payload);
        yield put({type: PERSON.CREATE_SUCCESS, payload: person})
    } catch (error) {
        yield put({type: PERSON.CREATE_FAIL, error: error.toString()})
    }
}

