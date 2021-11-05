const { Router } = require("express")
const express = require("express")
const { createPeople } = require("../controllers/people")
const router = express.Router() 

const{
  createPerson,
  readPeople, 
  deletePerson,
  updatePerson
} = require('./controllers/people')

router.get('/', readPeople)
router.post("/", createPeople)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

router.route('/').get(readPeople).post(createPerson)
router.route('/:id').put(updatePerson).delete(deletePerson)