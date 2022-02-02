const listDOM = document.querySelector('#list');

function newElement() {
    let newTask = document.getElementById("task").value;
    let newTaskText = document.createTextNode(newTask);
    let newTaskListing = document.createElement("li");
    newTaskListing.appendChild(newTaskText);
    listDOM.appendChild(newTaskListing);
    for (taskCount = 0; taskCount < listDOM.length; taskCount++){
        let taskNum = taskCount.toString();
        let taskList = "task" +  taskNum
        localStorage.setItem(taskList, newTask);
    }
    console.log(taskList)
}


function loadElement() {
    let newTask = document.getElementById("task").value;
    let newTaskText = document.createTextNode(newTask);
    let newTaskListing = document.createElement("li");
    localStorage.getItem("task");
    listDOM.appendChild(newTaskListing);
    localStorage.setItem("task", newTask);
}

// function newListElement () {
//     let newList = document.getElementById("list").value
//     let newListText = document.createTextNode(newList)
//     console.log(`${newList} görev listesi başarıyla eklendi.`)
//     localStorage.setItem("list", newList)
//     let newListListing = document.getElementById("list")
//     newListListing.appendChild(newListText)
// }