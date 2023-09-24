import { projectListingObject } from "./projectItems";
import { genEditTodoForm } from "./todoForms";
import { sortingOptions } from "./sort/sorting";
import { sortOptionChange } from "./sort/sortEvents";
import { savedSortDisplayItemsInList } from "./sort/sortingFuncs";

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
    let _creationDate = new Date();
    let _editedDate = 'None'
    let _id = genUniqueId();
    let _complete = false;
    let _completedDate = 'None'

    const getTitle = () => _title;
    const setTitle = (newTitle) => _title = newTitle;

    const getDesc = () => _description;
    const setDesc = (newDesc) => _description = newDesc;

    const getDueDate = () => _dueDate;
    const setDueDate = (newDueDate) => _dueDate = newDueDate;
    
    const getPriority = () => _priority;
    const setPriority = (newPriority) => _priority = newPriority;

    const getCreationDate = () => _creationDate;

    const getEditedDate = () => _editedDate;
    const setEditedDate = (newDate) => _editedDate = newDate;

    const getID = () => _id;

    const getComplete = () => _complete;
    const setComplete = () => _complete = true;

    const getCompletedDate = () => _completedDate;
    const setCompletedDate = (newCompleteDate) => _completedDate = newCompleteDate

    return { getTitle, getDesc, getDueDate, getPriority, getCreationDate, getEditedDate, getComplete, getCompletedDate, getID, 
        setTitle, setDesc, setDueDate, setPriority, setEditedDate, setComplete, setCompletedDate}
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

const parseDateYMD = (date) => {
    const dateArr = date.split('-');
    dateArr[1] = (Number(dateArr[1]) - 1).toString();
    return dateArr;
}
const genOverDueDays = (todo_item) => {
    const parsedDueDate = parseDateYMD(todo_item.getDueDate());
    const dueDate = new Date(parsedDueDate[0], parsedDueDate[1], parsedDueDate[2], 23, 59, 59);
    // dueDate.setHours(23, 59, 59); // set due date time to 11:59:59 pm of the due date
    const currDate = new Date();
    const overDueDays = Math.floor((dueDate - currDate) / 86400000)
    // if (overDueDays == -1)
    console.log(parsedDueDate, dueDate, currDate, overDueDays);

    return overDueDays
}

const genOverDueNotice = (todo_item) => {
    const overdueDays = genOverDueDays(todo_item);
    if (overdueDays == 0) {
        return '*Due today!*';
    } else if (overdueDays < 0) {
        return `*${(overdueDays*-1).toString()} days overdue!*`;
    } else {
        return `*Due in ${overdueDays} days.*`;
    }
}
// This function takes a todo object and adds its dom to the page
const genitemDisplay = (todo_item) => {
    const todoitem_displayBox = document.createElement('div');
    todoitem_displayBox.id = 'todo_item_displaybox'

    const displayTitle = document.createElement('div');
    displayTitle.className = 'display_title';
    displayTitle.innerText = todo_item.getTitle();

    const displayDatesContainer = document.createElement('div');
    displayDatesContainer.id = 'display_datescontainer';

    const displayDate = document.createElement('div');
    displayDate.className = 'display_date';
    displayDate.innerText = `Due on: ${todo_item.getDueDate()}` + " " + genOverDueNotice(todo_item);



    const displayCreationDate = document.createElement('div');
    displayCreationDate.id = 'display_creationdate';
    displayCreationDate.innerText = `Created on: ${todo_item.getCreationDate()}`

    displayDatesContainer.append(displayDate, displayCreationDate);

    if (todo_item.getEditedDate() != 'None') {
        const displayEditedDate = document.createElement('div');
        displayEditedDate.id = 'display_editeddate';
        displayEditedDate.innerText = `Edited on: ${todo_item.getEditedDate()}`;
        displayDatesContainer.appendChild(displayEditedDate);
    }
    genOverDueDays(todo_item);

    const displayPriority = document.createElement('div');
    displayPriority.className = 'display_priority';
    displayPriority.innerText = `Priority Level: ${todo_item.getPriority()}`;

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
        displayDatesContainer,
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
    displayDate.innerText = `Due on: ${todo_item.getDueDate()}`;

    const displayCompletedDate = document.createElement('div');
    displayCompletedDate.id = 'display_completedDate';
    displayCompletedDate.innerText = `Completed on: ${todo_item.getCompletedDate()}`

    const displayPriority = document.createElement('div');
    displayPriority.className = 'display_priority';
    displayPriority.innerText = `Priority Level: ${todo_item.getPriority()}`;

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
        displayCompletedDate,
        displayPriority,
        displayDesc,
        displayDelete,
    )

    return todoitem_displayBox;
}
const todoDeleteClick = (todo_item) => { // what happens when user click on the todo item's delete todo button
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

const todoEditClick = (todo_item) => { // what happens when user click on the todo item's edit todo button
    const todoItemEditButton = document.getElementById(`edit_${todo_item.getTitle()}_${todo_item.getID()}`);

    todoItemEditButton.addEventListener('click', () => {
        genEditTodoForm(todo_item);
        document.getElementById('display_modal').showModal();
        todoEditCancelClick();
        todoEditSaveClick(todo_item);
    })
} 

const clearncloseDisplayModal = () => {
    const displayModal = document.getElementById('display_modal');
    displayModal.close();
    while (displayModal.firstChild) {
        displayModal.removeChild(displayModal.lastChild);
    }
}
const todoEditCancelClick = () => { // what happens when user click on the todo item's cancel edit todo button
    const cancelEditButton = document.getElementById('todo_edit_cancel');
    cancelEditButton.addEventListener('click', () => {
        clearncloseDisplayModal();
    })
}

const todoEditSaveClick = (todo_item) => { // what happens when user clicks on save after making changes in the todo edit form
    const todoEditForm = document.getElementById('edit_form');
    todoEditForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formVals = new FormData(todoEditForm);
        const currtodoIdx = (projectListingObject[currProjectDirectory]).indexOf(todo_item);
        // const currtodoItem = (projectListingObject[currProjectDirectory])[currtodoIdx];
        //  = todoItem(
        //     formVals.get('todo_edit_title'),
        //     formVals.get('todo_edit_desc'),
        //     formVals.get('todo_edit_duedate'),
        //     formVals.get('todo_edit_priority')
        // )
        (projectListingObject[currProjectDirectory])[currtodoIdx].setTitle(formVals.get('todo_edit_title'));
        (projectListingObject[currProjectDirectory])[currtodoIdx].setDesc(formVals.get('todo_edit_desc'));
        (projectListingObject[currProjectDirectory])[currtodoIdx].setDueDate(formVals.get('todo_edit_duedate'));
        (projectListingObject[currProjectDirectory])[currtodoIdx].setPriority(formVals.get('todo_edit_priority'));
        (projectListingObject[currProjectDirectory])[currtodoIdx].setEditedDate(new Date());
        clearncloseDisplayModal();
        // displayitemsInList();
        savedSortDisplayItemsInList();
    })
}

const todoCompleteClick = (todo_item) => { //when the user clicks complete on a todo item, that single todo item is set to complete and added to the completed list
    const todoItemCompleteButton = document.getElementById(`complete_${todo_item.getTitle()}_${todo_item.getID()}`);
    todoItemCompleteButton.addEventListener('click', () => {
        todoItemCompleteButton.parentElement.remove();
        todo_item.setComplete();
        todo_item.setCompletedDate(new Date());

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
    listingSectHead.innerText =  getCurrProjectDirectoryVal() + ' ' + `${(projectListingObject[getCurrProjectDirectoryVal()]).length}/200` + ' To Dos';
    listingSectHead.appendChild(sortingOptions());
    for (let i = 0; i < (projectListingObject[currProjectDirectory]).length; i++) {
        const currTodoItem = (projectListingObject[currProjectDirectory])[i]
        if (currTodoItem.getComplete() == false) { //adds incomplete todos to the incomplete todo list
            contentdiv.appendChild(genitemDisplay(currTodoItem));
            todoCompleteClick(currTodoItem);
            todoEditClick(currTodoItem);
        }
        else { //adds complete todos to the completed todo list
            contentdivcomplete.appendChild(genCompletedItemDisplay(currTodoItem));
        }
        todoDeleteClick(currTodoItem);
    }
    console.log('display items in current project list/directory: ', (projectListingObject[currProjectDirectory]));
    sortOptionChange(); //add event listener for the sort option change
}

export {
    formSubmitClick,
    currProjectDirectory, setCurrProjectDirectoryVal, getCurrProjectDirectoryVal,
    displayitemsInList, clearAllItemInDisplay,
    genitemDisplay, genCompletedItemDisplay,
    todoDeleteClick, todoEditClick, todoEditCancelClick, todoCompleteClick
}