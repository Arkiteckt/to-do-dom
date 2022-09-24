let form = document.querySelector("form");
let ul = document.querySelector("ul"); //parent //li is child
let toDoTextbox = document.querySelector("#toDo"); //input box
let inputField = document.querySelector('#inputField');
let removeCompleted = document.querySelector('#removeCompleted');
let removeAll = document.querySelector('#removeAll');


form.addEventListener('submit', function(event){
    if(toDoTextbox.value === ''){
        alert('Please enter a value in the textbox')
    }
    event.preventDefault();
    //create new element
    let listItem = document.createElement('li');

    //set the text of the newly created element (so it acutally saids something)
    listItem.innerText = toDoTextbox.value;

//add strike-through
listItem.addEventListener('click', function(){
    console.log(listItem.innerText);

    if(listItem.style.textDecoration === ''){
        listItem.style.textDecoration = 'line-through';
    } else {
        listItem.style.textDecoration = '';
    }
})

//creates a button using javascript
let deleteButton = document.createElement('button');
deleteButton.innerText = "Delete";


deleteButton.addEventListener('click', function(){
listItem.remove();
})

listItem.appendChild(deleteButton);

// creates a edit button using javascript
let editButton = document.createElement('button');
editButton.innerText = "Edit";


editButton.addEventListener('click', function(){
listItem.remove();
})

listItem.appendChild(editButton);

    //add item to ul
    //parentElement.appendChild(newChildElement)
    ul.appendChild(listItem);

    toDoTextbox.value = "";

})


removeCompleted.addEventListener('click', function(){
    let listAll = document.querySelectorAll("ul li");
    console.log(listAll);

    if (listAll.length !== 0){ //want to remove items if they have the line-through property
        for(let item of listAll){
            if(item.style.textDecoration === 'line-through'){
                item.remove();
            }
        }
    }
})



// * Users have the ability to add new to-do items
// * Users have the ability to view to-do items
// * Allow users to clear all to-do items

// ## Stretch goals
// * Users have the ability to toggle the completion of to-do items
// * Allow users to delete individual to-do items
// * Allow users to edit existing to-do items

