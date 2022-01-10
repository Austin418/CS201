interface Draggable {
  dragStartHandler(event: DragEvent): void
  dragEndHandler(event: DragEvent): void
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void
  dropHandler(event: DragEvent): void
  dragLeaveHandler(event: DragEvent): void
}

enum ProjectStatus{
  Active,
  Finished
}

class Project{
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ){}
}

type Listener<T> = (items: T[]) => void

class State<T> {
  protected listeners: Listener<T>[] = []

  addListener(listenerFn: Listener<T>){
    this.listeners.push(listenerFn)
  }
}
class PrjectState extends State<Project> {
  private projects: Project[] = []
  private static instance: ProjectState
  
  private constructor() {
    super()
}

static getInstance() {
  if (this.instance) {
    return this.instance
  }
}

addProject(title: string, description: string, people:number){
  const newProject = new Project(
    Math.random().toString(),
    title,
    desctiption,
    people,
    ProjectStatus.Active
    )
    this.projects.push(newProject)
  }
  moveProject(projectID: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectID)
    if(project&& project.status!== newStatus){
      project.status = newStatus
    }
  }
  private updateListeners() {
    for(const listenerFn of this.listeners) {
      listenerFn(this.projects.slice())
    }
  }
}

const projectState = ProjectState.getInstance()

//* Validation
interface Validatable{
  value: string | number;
  maxLength?: number; 
  minLength?: number;
  required?: boolean
  max?: number;
  min?: number
}

function validate(input: Validatable){
  let isValid = true
  if (input.required) {
    isValid = isValid && input.value.toString().trim().length !== 0
  }if(input.minLength != null && typeof (input.value) === 'string'){
    isValid = isValid && input.value.length <= input.maxLength
  }
}