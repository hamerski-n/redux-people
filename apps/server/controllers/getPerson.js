let people = require('../memoryDB');

const getPerson = (req, res) => {
    const id = req.params.id;
    const person = people.find(el => el.id === id);
    res.status(200).json(person);
}

module.exports = getPerson;