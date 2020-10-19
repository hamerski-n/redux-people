import {PERSON} from "../constants";

const initialState = {}

export const personReducer = (state = initialState, action) => {

    switch (action.type) {

        case PERSON.GET_BY_ID_SUCCESS:
            return action.payload

        default:
            return state
    }
}