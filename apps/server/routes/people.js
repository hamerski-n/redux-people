const express = require('express');

const getPeople = require( "../controllers/getPeople");
const getPerson = require( "../controllers/getPerson");
const createPerson = require( "../controllers/createPerson");

const router = express.Router();

// GET people list
router.get('/', getPeople);

// GET person by ID
router.get('/:id', getPerson);

//POST new person
router.post('/', createPerson);

module.exports = router;
