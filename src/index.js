document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
  let taskList = document.querySelector("#tasks")

  form.addEventListener("submit", () => {
    const userInput = event.target.elements["new-task-description"].value
    buildToDo(userInput)
    
  })

  function buildToDo(userInput) {
    event.preventDefault()
    let list = document.createElement("li")
    list.textContent = userInput
    taskList.append(list)
  }
});

