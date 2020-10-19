const sortByKey = require( "../helpers/sortArrayOfObjectsByKey");

let people = require('../memoryDB');

const getPeople = (req, res) => {
    let peopleSortByFirstName = sortByKey(people,'firstName')
        res.status(200).json(peopleSortByFirstName);
}
module.exports = getPeople;