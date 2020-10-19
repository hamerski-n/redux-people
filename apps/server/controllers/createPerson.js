const {get} = require('lodash');
const {v4: uuidv4} = require('uuid');
let people = require('../memoryDB');
const sortByKey = require( "../helpers/sortArrayOfObjectsByKey");

const createPerson = (req, res) => {
    const firstName = get(req, 'body.firstName', '');
    const lastName = get(req, 'body.lastName', '');
    const age = get(req, 'body.age', null);

    const id = uuidv4();

    people.push({id: id, firstName: firstName, lastName: lastName,  age: age});
    let peopleSortByFirstName = sortByKey(people,'firstName')
    return res.json(peopleSortByFirstName);
}

module.exports = createPerson;




