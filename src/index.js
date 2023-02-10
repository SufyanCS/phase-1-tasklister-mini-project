document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form')
  const todosList = document.getElementById('tasks')
  taskForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const taskInput = document.getElementById('new-task-description').value
    todosList.innerHTML += `<li> ${taskInput} </li>`
  })
});
