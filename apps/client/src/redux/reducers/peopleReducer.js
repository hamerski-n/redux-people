import {PEOPLE, PERSON} from "../constants";

const initialState = {}

export const peopleReducer = (state = initialState, action) => {

    switch (action.type) {
        case PEOPLE.GET_ALL_SUCCESS:
            return {...state, peopleList: action.payload}

        case PERSON.CREATE_SUCCESS:
            return {...state, peopleList: action.payload}
            break;

        default:
            return state
    }

    return state

}