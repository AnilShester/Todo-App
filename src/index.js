const taskContainer = document.querySelector('.task__container')
const taskList = document.querySelector('.tasks__list')

//buttons
const addNewTaskBtn = document.querySelector('.tasks__create-task')
const clearTaskBtn = document.querySelector('.task__clear')

//adding new task
const addTask = document.querySelector('.add__task')

const cancelAddTask = document.querySelector('.add__task__cancel')
const addTaskBtn = document.querySelector('.add__task__add')

const listCount = document.querySelector('#list__count')

//form values
const addTaskForm = document.querySelector('.add__task__form')
const newTaskTitle = document.querySelector('.new__task__title')
const newTaskDate = document.querySelector('.new__task__date')
const newTaskStatus = document.querySelector('.new__task__status')

// add new task button
addNewTaskBtn.addEventListener('click', () => {
  taskContainer.classList.add('hidden')
  addTask.classList.add('show')
})

//cleat task button

const list = []
listCount.innerHTML = 0

//adding tasks
addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const title = newTaskTitle.value
  const date = newTaskDate.value
  const status = newTaskStatus.value

  if (title === '' || date === '') {
    alert('please enter the title and the date')
  } else {
    list.push({
      id: list.length + 1,
      title: title,
      date: date,
      status: status,
    })

    taskList.appendChild(addTaskFunction())

    listCount.innerHTML = list.length

    addTask.classList.remove('show')
    taskContainer.classList.remove('hidden')

    newTaskDate.value = ''
    newTaskTitle.value = ''
  }
})

function addTaskFunction() {
  let taskSection = document.createElement('div')
  let taskTitle = document.createElement('p')
  let taskDate = document.createElement('p')

  taskSection.classList = 'task__section'
  taskTitle.classList = 'task__title'
  taskDate.classList = 'task__date'

  console.log(list[list.length - 1])

  taskTitle.innerHTML += list[list.length - 1].title
  taskDate.innerHTML += list[list.length - 1].date

  taskSection.appendChild(taskTitle)
  taskSection.appendChild(taskDate)

  return taskSection
}

// cancel button
cancelAddTask.addEventListener('click', () => {
  addTask.classList.remove('show')
  taskContainer.classList.remove('hidden')
})
