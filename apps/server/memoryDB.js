const { v4: uuidv4 } = require('uuid');

let people = [
    {id: uuidv4(), firstName: 'Adam', lastName: 'First', age: 100},
    {id: '091a72f8-694f-4d05-b12a-2e5e162aab2b', firstName: 'Eva', lastName:'First', age: 101},
    {id: uuidv4(), firstName: 'Luisa', lastName:'First', age: 23},

];

module.exports = people;