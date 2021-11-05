const express = require("express")
const router = express.Router()
const tasks = require('../controllers/tasksCon')

const{
  getTask,
  getTasks,
  deleteTask,
  clearTasks,
  editTask,
  createTask
}= tasks

router.route('/')
.get(getTasks)
.post(createTask)
.delete(clearTasks)

router.route('/:id')
.get(getTask)
.delete(deleteTask)
.put(editTask)
 
module.exports = router