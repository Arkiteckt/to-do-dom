let form = document.querySelector("form");
let ul = document.querySelector("ul");
let toDoTextbox = document.querySelector("toDo");
let inputField = document.querySelector('#inputField');


    //create new element
    let listItem = document.createElement('li');

    //set the text of the newly created element


document.querySelector('#add').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
}
// new buttons need to setup up
let removeCompletedButton = document.querySelector('#removeCompleted');
let removeAllButton = document.querySelector('#removeAll');



    // remove all button
removeAllButton.addEventListener('click', function () {
    for (const item of toDoContainer.children) {
        toDoContainer.removeChild(item);
    }

})
// //let deleteButton = document.createElement
// //('button');
// //deleteButton.innerText = "Delete";
// //deleteButton.addEvent



