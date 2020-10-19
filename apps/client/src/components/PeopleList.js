import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {get} from 'lodash';
import {PEOPLE, PERSON} from "../redux/constants";
import {scrollToTop} from "./utils";

const PeopleList = (props) => {
    const {getPeople, getPersonById} = props;

    const peopleList = get(props, 'People.peopleList', []);
    const selectedPersonId = get(props, 'Person.id', '');

    useEffect(() => {
        getPersonById('091a72f8-694f-4d05-b12a-2e5e162aab2b')
        getPeople()
    }, []);

    const onSelectPerson=(id) =>{
        getPersonById(id);
        scrollToTop();
    }

    if (peopleList.length === 0) return <div>There are no people in the list</div>

    return (
        <div>
            <h1>Choose a person:</h1>
            <div>
                {peopleList.map(person =>
                    <div className={selectedPersonId === person.id ? "peopleList--item active" : "peopleList--item"}
                         key={person.id}
                         onClick={()=>onSelectPerson(person.id)}
                    >
                        {person.firstName}
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        People: state.people,
        Person: state.person
    }
}

const mapDispatchToProps = (dispatch) => ({
    getPeople: () => dispatch({type: PEOPLE.GET_ALL}),
    getPersonById: (payload) => dispatch({type: PERSON.GET_BY_ID, payload}),

});
export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);