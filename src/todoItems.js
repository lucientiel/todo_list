import { projectListingObject } from "./projectItems";

let currProjectDirectory;

const setCurrProjectDirectoryVal = (someValue) => {
    currProjectDirectory = someValue;
}

const getCurrProjectDirectoryVal = () => currProjectDirectory;

const genUniqueId = () => {
    let genNum = Math.floor(Math.random() * 200);
    const existingID = projectListingObject[currProjectDirectory].map(item => item.getID());
    while (existingID.includes(genNum)) {
        genNum = Math.floor(Math.random() * 200);
    }
    return genNum;
}

const todoItem = (title, description, duedate, priority) => {
    let _title = title;
    let _description = description;
    let _dueDate = duedate;
    let _priority = priority;
    let _id = genUniqueId();
    let _complete = false;

    const getTitle = () => _title;
    const getDesc = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;
    const getID = () => _id;
    const getComplete = () => _complete;
    const setComplete = () => _complete = true;

    return { getTitle, getDesc, getDueDate, getPriority, getID, getComplete, setComplete}
}

const insertItemToList = (todo_item) => {
    projectListingObject[currProjectDirectory].push(todo_item);
}


// DOM FUNCTIONS HERE -------------------------------------- //
// when the todo item form is submitted, a todo item will be generated and pushed to the list of a project directory
const formSubmitClick = () => {
    const todoItemForm = document.getElementById('todo_item_form');

    todoItemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (currProjectDirectory == undefined) {
            alert('Please select a project!')
        }
        else {
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
            console.log(newTodoItem.getID())
            insertItemToList(newTodoItem);
            console.log(projectListingObject[currProjectDirectory]);
            displayitemsInList();
        }

    })
    
}
// This function takes a todo object and adds its dom to the page
const genitemDisplay = (todo_item) => {
    const todoitem_displayBox = document.createElement('div');
    todoitem_displayBox.id = 'todo_item_displaybox'

    const displayTitle = document.createElement('div');
    displayTitle.className = 'display_title';
    displayTitle.innerText = todo_item.getTitle();

    const displayDate = document.createElement('div');
    displayDate.className = 'display_date';
    displayDate.innerText = `Due on ${todo_item.getDueDate()}`;

    const displayPriority = document.createElement('div');
    displayPriority.className = 'display_priority';
    displayPriority.innerText = `Priority: ${todo_item.getPriority()}`;

    const displayDesc = document.createElement('p');
    displayDesc.innerText = todo_item.getDesc();

    const displayDelete = document.createElement('button');
    displayDelete.className = 'display_delete';
    displayDelete.id = `delete_${todo_item.getTitle()}_${todo_item.getID()}`;
    displayDelete.value = `${todo_item.getIndex}`;
    displayDelete.innerText = 'Delete Todo';

    const displayEdit = document.createElement('button');
    displayEdit.id = `edit_${todo_item.getTitle()}_${todo_item.getID()}`;
    displayEdit.value = `${todo_item.getIndex}`;
    displayEdit.innerText = 'Edit Todo'

    const displayComplete = document.createElement('button');
    displayComplete.id = `complete_${todo_item.getTitle()}_${todo_item.getID()}`;
    displayComplete.value = `${todo_item.getIndex}`;
    displayComplete.innerText = 'Complete Todo'

    todoitem_displayBox.append(
        displayTitle,
        displayDate,
        displayPriority,
        displayDesc,
        displayDelete,
        displayEdit,
        displayComplete
    )

    return todoitem_displayBox;
}

const genCompletedItemDisplay = (todo_item) => {
    const todoitem_displayBox = document.createElement('div');
    todoitem_displayBox.id = 'todo_item_displaybox'

    const displayTitle = document.createElement('div');
    displayTitle.className = 'display_title';
    displayTitle.innerText = todo_item.getTitle();

    const displayDate = document.createElement('div');
    displayDate.className = 'display_date';
    displayDate.innerText = `Due on ${todo_item.getDueDate()}`;

    const displayPriority = document.createElement('div');
    displayPriority.className = 'display_priority';
    displayPriority.innerText = `Priority: ${todo_item.getPriority()}`;

    const displayDesc = document.createElement('p');
    displayDesc.innerText = todo_item.getDesc();

    const displayDelete = document.createElement('button');
    displayDelete.className = 'display_delete';
    displayDelete.id = `delete_${todo_item.getTitle()}_${todo_item.getID()}`;
    displayDelete.value = `${todo_item.getIndex}`;
    displayDelete.innerText = 'Delete Todo';

    todoitem_displayBox.append(
        displayTitle,
        displayDate,
        displayPriority,
        displayDesc,
        displayDelete,
    )

    return todoitem_displayBox;
}
const todoDeleteClick = (todo_item) => {
    const todoItemDeleteButton = document.getElementById(`delete_${todo_item.getTitle()}_${todo_item.getID()}`);

    todoItemDeleteButton.addEventListener('click', () => {
        todoItemDeleteButton.parentElement.remove();
        projectListingObject[currProjectDirectory] = (projectListingObject[currProjectDirectory]).filter(item => item.getID() != todo_item.getID());
        console.log(`${todo_item} is deleted!`, projectListingObject[currProjectDirectory]);

        const listingSectHead = document.getElementById('listing_head');
        listingSectHead.innerText =  currProjectDirectory + ' ' + `${(projectListingObject[currProjectDirectory]).length}/200`; 
        console.log('TOTAL LENGTH OF DIRECTORY AFTER DELETE: ',  projectListingObject[currProjectDirectory].length);
    })
}

const todoEditClick = (todo_item) => {
    const todoItemEditButton = document.getElementById(`edit_${todo_item.getTitle()}_${todo_item.getID()}`);

    todoItemEditButton.addEventListener('click', () => {
        
    })
} 

const todoCompleteClick = (todo_item) => {
    const todoItemCompleteButton = document.getElementById(`complete_${todo_item.getTitle()}_${todo_item.getID()}`);
    todoItemCompleteButton.addEventListener('click', () => {
        todoItemCompleteButton.parentElement.remove();
        todo_item.setComplete();

        const completedList = document.getElementById('listing_complete_elem');

        const completedtodoitem_displayBox = genCompletedItemDisplay(todo_item);

        completedList.appendChild(completedtodoitem_displayBox);
    })
}
// wipes all the items on the page, used when entering a new project directory in order to clear the page of the todo items from the previous directory
const clearAllItemInDisplay = () => {
    const contentdiv = document.getElementById('listing_elem');
    const contentdivcomplete = document.getElementById('listing_complete_elem');
    while (contentdiv.firstChild) {
        contentdiv.removeChild(contentdiv.lastChild);
    }
    while (contentdivcomplete.firstChild) {
        contentdivcomplete.removeChild(contentdivcomplete.lastChild);
    }
}

// calls clearallitemindisplay to wipe the page, then add all the todo item objects related to the current project directory
const displayitemsInList = () => {
    const contentdiv = document.getElementById('listing_elem');
    const contentdivcomplete = document.getElementById('listing_complete_elem');
    clearAllItemInDisplay();

    const listingSectHead = document.getElementById('listing_head');
    listingSectHead.innerText =  getCurrProjectDirectoryVal() + ' ' + `${(projectListingObject[getCurrProjectDirectoryVal()]).length}/200`;

    for (let i = 0; i < (projectListingObject[currProjectDirectory]).length; i++) {
        const currTodoItem = (projectListingObject[currProjectDirectory])[i]
        if (currTodoItem.getComplete() == false) {
            contentdiv.appendChild(genitemDisplay(currTodoItem));
            todoCompleteClick(currTodoItem);
        }
        else {
            contentdivcomplete.appendChild(genCompletedItemDisplay(currTodoItem));
        }
        todoDeleteClick(currTodoItem);
    }
    console.log('display items in current project list/directory: ', (projectListingObject[currProjectDirectory]));
}

export {
    formSubmitClick,
    currProjectDirectory, setCurrProjectDirectoryVal, getCurrProjectDirectoryVal,
    displayitemsInList
}