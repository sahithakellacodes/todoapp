function addTask(){
    let target = document.getElementById("taskContainer");
    let newContent = document.createElement("li");
    newContent.className = "flex items-center align-middle justify-between";

    let innerDiv = document.createElement("div");
    innerDiv.className = "flex items-center align-middle";

    let circleIcon = document.createElement("i");
    circleIcon.className = "fa-regular fa-circle p-2 text-blue-500 scale-125";
    circleIcon.id = "checkBox";
    circleIcon.addEventListener('click', toggleCompletedTask);

    let textarea = document.createElement("textarea");
    textarea.className = "p-2 h-5 leading-5 text-ellipsis overflow-hidden";
    textarea.style.resize = "none";

    innerDiv.appendChild(circleIcon);
    innerDiv.appendChild(textarea);

    let trashIcon = document.createElement("i");
    trashIcon.className = "delbtn fa-regular fa-trash-can p-2 text-blue-500 scale-125";
    trashIcon.addEventListener('click', deleteTask);

    newContent.appendChild(innerDiv);
    newContent.appendChild(trashIcon);

    taskContainer.appendChild(newContent);
}

function deleteTask(event){
    const button = event.target; 
    const parentDiv = button.parentNode;
    parentDiv.remove();
}

function toggleCompletedTask(event){
  let circleIcon = event.target;
  if (circleIcon.classList.contains('fa-circle')) {
    circleIcon.classList.remove('fa-circle');
    circleIcon.classList.add('fa-circle-check');
    circleIcon.parentElement.parentElement.classList.add('opacity-50');
  } else {
    circleIcon.classList.remove('fa-circle-check');
    circleIcon.parentElement.parentElement.classList.remove('opacity-50')
    circleIcon.classList.add('fa-circle');
  }
}