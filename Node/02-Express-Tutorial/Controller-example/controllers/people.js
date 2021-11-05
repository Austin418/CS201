
let {people} = require('../../data')

const readPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

const createPeople = (req, res) => {
  const { name } = req.body
  if (name) {
    people.push({ id: new Date().getTime(), name })
    return res.status(201).json({ person: name })
  }
}

const updatePerson = (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((each) => {
    return each.id === Number(id)
  })
  if (!person) {
    return res.status(400).json({ success: false, msg: `no person with id ${id}` })
  }

  const newPeople = people.map((person) => {
    if (person.id === 1*id) person.name = name
    return person

  })
  people = newPeople
  res.status(202).json({ success: true, data: newPeople })
}
const deletePerson = (req, res) => {
  const { id } = req.params
  const person = people.find((each) => each.id === Number(id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.filter((person) => {
    return person.id !== Number(id)
  })
  people = newPeople
  res.status(202).json({ success: true, data: people })
}


module.exports = {
  createPeople,
  readPeople,
  updatePerson,
  deletePerson
}