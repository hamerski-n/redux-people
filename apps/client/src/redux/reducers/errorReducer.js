import {ERRORS, PEOPLE, PERSON} from "../constants";

const initialState = []

export const errorReducer = (state = initialState, action) => {

    switch (action.type) {
        case PEOPLE.GET_ALL_FAIL:
            return updateState({state: state, type: 'PEOPLE.GET_ALL_FAIL', error: action.error})

        case PERSON.GET_BY_ID_FAIL:
            return updateState({state: state, type: 'PERSON.GET_BY_ID_FAIL', error: action.error})

        case PERSON.CREATE_FAIL:
            return updateState({state: state, type: 'PERSON.CREATE_FAIL', error: action.error})

        case ERRORS.CLOSE_SUCCESS:
            return setStatusOld({state: state})

        default:
            return state
    }

    return state

}

function updateState({state, type, error}) {
    const newState = state.map((el) => ({...el, status: 'old'}));
    newState.push({type: type, error: error, status: 'new'})
    return newState
}

function setStatusOld({state}) {
    return state.map((el) => ({...el, status: 'old'}));
}