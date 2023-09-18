import { projectListingObject } from "./projectItems";

let currProjectDirectory;

const setCurrProjectDirectoryVal = (someValue) => {
    currProjectDirectory = someValue;
}

const todoItem = (title, description, duedate, priority) => {
    let _title = title;
    let _description = description;
    let _dueDate = duedate;
    let _priority = priority;

    const getTitle = () => _title;
    const getDesc = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;

    return { getTitle, getDesc, getDueDate, getPriority}
}

const insertItemToList = (todo_item) => {
    projectListingObject[currProjectDirectory].push(todo_item);
}


// DOM FUNCTIONS HERE -------------------------------------- //

const formSubmitClick = () => {
    const todoItemForm = document.getElementById('todo_item_form');

    todoItemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formVals = new FormData(todoItemForm);
        console.log(formVals);
        console.log(
            formVals.get('todo_item_title'),
            formVals.get('todo_item_desc'),
            formVals.get('todo_item_duedate'),
            formVals.get('todo_item_priority')
        );
        const newTodoItem = todoItem(
            formVals.get('todo_item_title'),
            formVals.get('todo_item_desc'),
            formVals.get('todo_item_duedate'),
            formVals.get('todo_item_priority')
        );
        insertItemToList(newTodoItem);
        console.log(projectListingObject[currProjectDirectory]);
        displayitemsInList();
    })
    
}

const genitemDisplay = (todo_item) => {
    const todoitem_displayBox = document.createElement('div');
    todoitem_displayBox.id = 'todo_item_displaybox'

    const displayTitle = document.createElement('div');
    displayTitle.innerText = todo_item.getTitle();

    const displayDate = document.createElement('div');
    displayDate.innerText = todo_item.getDueDate();

    const displayPriority = document.createElement('div');
    displayPriority.innerText = todo_item.getPriority();

    const displayDesc = document.createElement('p');
    displayDesc.innerText = todo_item.getDesc();

    todoitem_displayBox.append(
        displayTitle,
        displayDate,
        displayPriority,
        displayDesc
    )

    return todoitem_displayBox;
}

const clearAllItemInDisplay = () => {
    const contentdiv = document.getElementById('listing_elem');
    while (contentdiv.firstChild) {
        contentdiv.removeChild(contentdiv.lastChild);
    }
}
const displayitemsInList = () => {
    const contentdiv = document.getElementById('listing_elem');
    clearAllItemInDisplay();
    for (let i = 0; i < (projectListingObject[currProjectDirectory]).length; i++) {
        const currTodoItem = (projectListingObject[currProjectDirectory])[i]
        contentdiv.appendChild(genitemDisplay(currTodoItem));
    }
    console.log('display items in current project list/directory: ', (projectListingObject[currProjectDirectory]));
}

export {
    formSubmitClick,
    currProjectDirectory, setCurrProjectDirectoryVal,
    displayitemsInList
}