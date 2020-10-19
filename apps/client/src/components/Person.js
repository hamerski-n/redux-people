import React, {useEffect} from "react";
import {PERSON} from "../redux/constants";
import {connect} from "react-redux";
import {get} from 'lodash';

const Person = (props) => {
    const {getPerson} = props;
    const firstName = get(props, 'Person.firstName', '');
    const lastName = get(props, 'Person.lastName', '');
    const age = get(props, 'Person.age', null);

    useEffect(() => {
        getPerson('091a72f8-694f-4d05-b12a-2e5e162aab2b');
    }, []);


    return (
        <div className="card--style">
            <h1 className="title">Person </h1>
            <div><strong>First name:</strong> {firstName} </div>
            <div><strong>Last name:</strong> {lastName} </div>
            <div><strong>Age:</strong> {age} </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Person: state.person
    }
}

const mapDispatchToProps = (dispatch) => ({
    getPerson: (payload) => dispatch({type: PERSON.GET_BY_ID, payload}),

});
export default connect(mapStateToProps, mapDispatchToProps)(Person);