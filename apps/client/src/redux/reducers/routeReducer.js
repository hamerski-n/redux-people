import {combineReducers} from "redux";
import {peopleReducer} from "./peopleReducer";
import {personReducer} from "./personReducer";
import {errorReducer} from "./errorReducer";

export const routeReducer = combineReducers({
    people: peopleReducer,
    person: personReducer,
    error: errorReducer,
})