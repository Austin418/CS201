// define all DOM elements
const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')

const showTasks = async () => {
  loadingDOM.style.visibility = "visible"
}

const showTasks = async () => {
  loadingDOM.style.visibility = "visible"
  try {
    const { data } = await axios.get('/api/v1/tasks')
  } catch (err) {
    tasksDOM.innerHTML = `<h5 class ="empty-lit">No Tasks in your list</h5>`
    loadingDOM.style.visibility = "hidden"
    return
  }

  const allTasks = tasks.map((task) => {
    const { completed, _id: taskID, name } = task
    return (`<div class="single-task ${completed && "task-completed"}">
<h5><span><i class="far fa-check-circle></i></span>${name}</h5>
<div class="task-links">

<!--edit link-->
<a href="task.html?id=${taskID}" class"edit-link">
<i class"fas fa-edit"></i></a>

<!--delete btn-->
<button type="button" class="delete-btn" data-id="${taskID}
<i class="fas fa-trash"></i>
</button>
</div>
    </div>`)
  }).join("")
  tasksDOM.innerHTML = allTasks
}catch(err) {
  tasksDOM.innerHTML
}

showTasks()

//delete task /api/v1/tasks/:id

tasksDOM.addEventListene("click", async (e) => {
  const target = e.target
  if (target.parentElement.classList.contains("delete-btn")) {
    const id = target.parentElement.dataset.id
    try {
      await axios.delete(`/api/v1/tasks/${id}`)
      showTasks()
    } catch (err) {
      console.log(err);
    }
  }
  loadingDOM.style.visibility = "hidden"
})


formDOM.addEventListener("submit", async (e) =>{
  e.preventDefault()
  const name = taskInputDOM.value
  try{
    await axios.post('/api/v1/tasks', {name})
    showTasks()
    taskInputDOM.value = ""
    formAlertDOM.style.display = "block"
    formAlertDOM.textContent = 'success, task added'
    formAlertDOM.classList.add('text-success')
  }catch(err){
    formAlertDOM.style.visibility = "hidden"
  }
}