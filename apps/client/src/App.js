import React from 'react';
import 'antd/dist/antd.css'
import PeopleList from "./components/PeopleList";
import AddPerson from "./components/AddPerson";
import Person from "./components/Person";
import '../src/styles/style.scss';
import ErrorAlert from "./components/ErrorAlert";

function App() {

    return (
        <div className="app">
            <div className="flex-el">
                <Person/>
                <PeopleList/>
            </div>
            <div className="flex-el">
                <AddPerson/>
            </div>

            <div className="flex-el">
                <ErrorAlert/>
            </div>
        </div>
    );
}

export default App;
