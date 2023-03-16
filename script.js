( () => {const btn = document.querySelector("[data-form-btn]");
const createTask =("click", (evento) => {
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li")
    task.classList.add("card");
    input.value = "";
    //backlist
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    taskContent.appendChild(deleteTask());
    console.log(checkComplete())
    const content = `<div>`
    //task.innerHTML = content;
    task.appendChild(taskContent);

    list.appendChild(task)
    console.log(content);

})

console.log(btn);
//Arrow functions o funciones anonimas
btn.addEventListener("click", createTask)

const deleteTask = () =>{
    const i = document.createElement("i");
    i.classList.add("far");
    i.classList.add("fa-trash-alt");
    i.classList.add("trashIcon");
    i.classList.add("icon");
    return i;
}


const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
}
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon")
    element.classList.toggle("far");
}
})();