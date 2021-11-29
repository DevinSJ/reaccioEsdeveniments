document.addEventListener('DOMContentLoaded', function(){
    generalFunction();
});


function generalFunction(){
    document.addEventListener('click', function(e){
        hanHechoClick(e);

    });

    btnAddTask = document.getElementById('btnAddTask');
    btnAddTask.addEventListener('click', function(){
        addNewTask();
    })
}


function hanHechoClick(e){
    const element = e.target.tagName;
    const textElementCreated = document.getElementById('textElement');

    textElementCreated.innerHTML = element;

    setTimeout(function(){alert("You pressed the " + element)}, 2000);
}

function addNewTask(){
    const containerTaskList = document.getElementById('taskList');
    const newElement = document.createElement('li');
    const textNewElement = document.createTextNode('Tasca');

    newElement.append(textNewElement);
    containerTaskList.appendChild(newElement);
}

