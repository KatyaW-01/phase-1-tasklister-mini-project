document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
  let taskList = document.querySelector("#tasks")

  form.addEventListener("submit", (event) => {
    const userInput = event.target.elements["new-task-description"].value
    buildToDo(userInput,event)
    
  })

  function buildToDo(userInput,event) {
    event.preventDefault()
    let list = document.createElement("li")
    list.textContent = userInput
    taskList.append(list)
  }
});

