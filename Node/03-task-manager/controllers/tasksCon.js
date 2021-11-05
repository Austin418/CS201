const getTasks = (req, res) => {
  res.json({methosd: req.method, task: 'getTask', body: req.body})
}
const createTask = (req, res) => {
  res.json({method: req.method, task: 'createTask', body: req.body})
}
const deleteTask = (req, res) => {
  res.json({method: req.method, task: "getTask", body: req.body})
}
const clearTasks = (req, res) => {
  res.json({method: req.method, task: 'clearTasks'})
}
const getTask = (req, res) => {
  res.json({method: req.method, task: "getTask", id: req.params})
}
const editTask = (req, res) => {
  res.json({
    method: req.method,
    task: 'editTask',
    id: req.params,
    body: req.body,
  })
}

module.exports = {getTasks, createTask, deleteTask, clearTasks, getTask, editTask}