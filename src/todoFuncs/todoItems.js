import { removeListingElems } from "../projectFuncs/projectItems";
import { genEditTodoForm } from "./todoForms";
import { sortingOptions } from "../sort/sorting";
import { sortOptionChange } from "../sort/sortEvents";
import { savedSortDisplayItemsInList } from "../sort/sortingFuncs";
import { changebgColorByPriority } from "../priorityColors";
import { upcomingTaskDayRange } from "../upcoming/upcomingSelect";
import { displayAllUpcomingTasks } from "../upcoming/upcomingTasks";
import { selectUpcomingDuedTasksDaysOptionClick } from "../upcoming/upcomingSelectEvents";
import { deleteItemfromDirectory, editItemInDirectory, getCurrItem, getCurrItemIndex, getCurrProjectDirectoryLength, insertItemToList, setItemComplete } from "../storage/localStorageFuncs";

let currProjectDirectory;

const setCurrProjectDirectoryVal = (someValue) => {
    currProjectDirectory = someValue;
}

const getCurrProjectDirectoryVal = () => currProjectDirectory;

const genUniqueId = () => {
    let genNum = Math.floor(Math.random() * 200);
    const existingID = (JSON.parse(localStorage.getItem(currProjectDirectory))).map(item => item.id); // check all existing
    while (existingID.includes(genNum)) {
        genNum = Math.floor(Math.random() * 200);
    }
    return genNum;
}

const todoItem = (inputtitle, inputdescription, inputduedate, inputpriority) => {
    let title = inputtitle;
    let description = inputdescription;
    let dueDate = inputduedate;
    let priority = inputpriority;
    let creationDate = new Date();
    let editedDate = 'None'
    let id = genUniqueId();
    let complete = false;
    let completedDate = 'None'


    return { title, description, dueDate, priority, creationDate, editedDate, id, complete, completedDate}
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
            const newTodoItem = todoItem(
                formVals.get('todo_item_title'),
                formVals.get('todo_item_desc'),
                formVals.get('todo_item_duedate'),
                formVals.get('todo_item_priority')
            );
            console.log(newTodoItem.id)
            insertItemToList(newTodoItem);
            displayitemsInList();
        }
        todoItemForm.reset();
    })
    
}

const parseDateYMD = (date) => {
    const dateArr = date.split('-');
    dateArr[1] = (Number(dateArr[1]) - 1).toString();
    return dateArr;
}
const genOverDueDays = (todo_item) => {
    const parsedDueDate = parseDateYMD(todo_item.dueDate);
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
        return '*DUE TODAY*';
    } else if (overdueDays < 0) {
        return `*${(overdueDays*-1).toString()} DAYS OVERDUE*`;
    } else {
        return `*Due in ${overdueDays} days.*`;
    }
}
// This function takes a todo object and adds its dom to the page
const genitemDisplay = (todo_item) => {
    const todoitem_displayBox = document.createElement('div');
    todoitem_displayBox.className = 'todo_item_displaybox'

    const displayTitle = document.createElement('div');
    displayTitle.className = 'display_title';
    displayTitle.innerText = todo_item.title;

    const displayDatesContainer = document.createElement('div');
    displayDatesContainer.className = 'display_datescontainer';

    const displayDate = document.createElement('div');
    displayDate.className = 'display_date';
    displayDate.innerText = `Due on: ${todo_item.dueDate}` + " " + genOverDueNotice(todo_item);



    const displayCreationDate = document.createElement('div');
    displayCreationDate.className = 'display_creationdate';
    displayCreationDate.innerText = `Created on: ${todo_item.creationDate}`

    displayDatesContainer.append(displayDate, displayCreationDate);

    if (todo_item.editedDate != 'None') {
        const displayEditedDate = document.createElement('div');
        displayEditedDate.className = 'display_editeddate';
        displayEditedDate.innerText = `Edited on: ${todo_item.editedDate}`;
        displayDatesContainer.appendChild(displayEditedDate);
    }
    // genOverDueDays(todo_item);

    const displayPriority = document.createElement('div');
    displayPriority.className = 'display_priority';
    displayPriority.innerText = `Priority Level: ${todo_item.priority}`;

    const displayDesc = document.createElement('p');
    displayDesc.innerText = todo_item.description;

    const displayDelete = document.createElement('button');
    displayDelete.className = 'display_delete';
    displayDelete.id = `delete_${todo_item.title}_${todo_item.id}`;
    displayDelete.value = `${todo_item.getIndex}`;
    displayDelete.innerText = 'Delete Todo';

    const displayEdit = document.createElement('button');
    displayEdit.id = `edit_${todo_item.title}_${todo_item.id}`;
    displayEdit.value = `${todo_item.getIndex}`;
    displayEdit.innerText = 'Edit Todo'

    const displayComplete = document.createElement('button');
    displayComplete.id = `complete_${todo_item.title}_${todo_item.id}`;
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

    changebgColorByPriority(todo_item, todoitem_displayBox); //adds a bg color style to the todo item container

    return todoitem_displayBox;
}

const genCompletedItemDisplay = (todo_item) => {
    const todoitem_displayBox = document.createElement('div');
    todoitem_displayBox.id = 'todo_item_displaybox'

    const displayTitle = document.createElement('div');
    displayTitle.className = 'display_title';
    displayTitle.innerText = todo_item.title;

    const displayDate = document.createElement('div');
    displayDate.className = 'display_date';
    displayDate.innerText = `Due on: ${todo_item.dueDate}`;

    const displayCompletedDate = document.createElement('div');
    displayCompletedDate.className = 'display_completedDate';
    displayCompletedDate.innerText = `Completed on: ${todo_item.completedDate}`

    const displayPriority = document.createElement('div');
    displayPriority.className = 'display_priority';
    displayPriority.innerText = `Priority Level: ${todo_item.priority}`;

    const displayDesc = document.createElement('p');
    displayDesc.innerText = todo_item.description;

    const displayDelete = document.createElement('button');
    displayDelete.className = 'display_delete';
    displayDelete.id = `delete_${todo_item.title}_${todo_item.id}`;
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
    const todoItemDeleteButton = document.getElementById(`delete_${todo_item.title}_${todo_item.id}`);

    todoItemDeleteButton.addEventListener('click', () => {
        todoItemDeleteButton.parentElement.remove();
        deleteItemfromDirectory(todo_item);
        console.log(`${todo_item} is deleted!`);
        
        const listingSectHead = document.getElementById('projName_itemCount');
        listingSectHead.innerText =  currProjectDirectory + ' ' + `${getCurrProjectDirectoryLength(currProjectDirectory)}/200` + ' Tasks'; 
        console.log('TOTAL LENGTH OF DIRECTORY AFTER DELETE: ',  getCurrProjectDirectoryLength(currProjectDirectory));
    })
}

const todoEditClick = (todo_item) => { // what happens when user click on the todo item's edit todo button
    const todoItemEditButton = document.getElementById(`edit_${todo_item.title}_${todo_item.id}`);

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

        const currtodoIdx = getCurrItemIndex(todo_item);
        editItemInDirectory(formVals, currtodoIdx);
        clearncloseDisplayModal();
        // displayitemsInList();
        savedSortDisplayItemsInList();
    })
}

const todoCompleteClick = (todo_item) => { //when the user clicks complete on a todo item, that single todo item is set to complete and added to the completed list
    const todoItemCompleteButton = document.getElementById(`complete_${todo_item.title}_${todo_item.id}`);
    todoItemCompleteButton.addEventListener('click', () => {
        todoItemCompleteButton.parentElement.remove();
        // todo_item.complete = true;
        // todo_item.completedDate = new Date();
        setItemComplete(todo_item);

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

const exitProjectDirectoryButton = () => {
    const exitButton = document.createElement('button') 
    exitButton.id = 'exitdirectory_button';
    exitButton.innerText = 'Exit Project';
    return exitButton;
}

const exitProjectButtonClickListener = () => {
    const exitButton = document.getElementById('exitdirectory_button');
    exitButton.addEventListener('click', () => {
        removeListingElems(); //removes listing elem and listing complete elem, leaving everything until listing head
        const listingContainerElem = document.getElementById('listing_container');
        const listingSectHead = document.getElementById('listing_head');
        listingSectHead.innerText = 'Upcoming Tasks';
        const listingUpcoming = document.createElement('div');
        listingUpcoming.id = 'listing_upcoming';
    
        listingUpcoming.appendChild(upcomingTaskDayRange());

        listingContainerElem.appendChild(listingUpcoming);

        displayAllUpcomingTasks(0);
        selectUpcomingDuedTasksDaysOptionClick();
        setCurrProjectDirectoryVal(undefined);
    })
}

const listingHeadDiv = () => {
    const nameAndItemCountElem = document.createElement('div');
    nameAndItemCountElem.id = 'projName_itemCount';

    nameAndItemCountElem.innerText = getCurrProjectDirectoryVal() + ' ' + `${getCurrProjectDirectoryLength(currProjectDirectory)}/200` + ' Tasks';

    return nameAndItemCountElem;
}

// calls clearallitemindisplay to wipe the page, then add all the todo item objects related to the current project directory
const displayitemsInList = () => {
    const contentdiv = document.getElementById('listing_elem');
    const contentdivcomplete = document.getElementById('listing_complete_elem');
    clearAllItemInDisplay();

    const listingSectHead = document.getElementById('listing_head');
    //listingSectHead.innerText =  getCurrProjectDirectoryVal() + ' ' + `${getCurrProjectDirectoryLength(currProjectDirectory)}/200` + ' Tasks';
    listingSectHead.innerText = '';
    listingSectHead.appendChild(listingHeadDiv());
    listingSectHead.appendChild(sortingOptions()); // add the sorting select option into listing head
    listingSectHead.appendChild(exitProjectDirectoryButton());

    for (let i = 0; i < getCurrProjectDirectoryLength(currProjectDirectory); i++) {
        const currTodoItem = getCurrItem(i);
        console.log('currTodoItem', currTodoItem)
        if (currTodoItem.complete == false) { //adds incomplete todos to the incomplete todo list
            contentdiv.appendChild(genitemDisplay(currTodoItem));
            todoCompleteClick(currTodoItem);
            todoEditClick(currTodoItem);
        }
        else { //adds complete todos to the completed todo list
            contentdivcomplete.appendChild(genCompletedItemDisplay(currTodoItem));
        }
        todoDeleteClick(currTodoItem);
    }

    sortOptionChange(); //add event listener for the sort option change
    exitProjectButtonClickListener();
}

export {
    formSubmitClick,
    currProjectDirectory, setCurrProjectDirectoryVal, getCurrProjectDirectoryVal,
    displayitemsInList, clearAllItemInDisplay,
    genitemDisplay, genCompletedItemDisplay,
    todoDeleteClick, todoEditClick, todoEditCancelClick, todoCompleteClick,
    parseDateYMD, genOverDueDays, genOverDueNotice, changebgColorByPriority
}