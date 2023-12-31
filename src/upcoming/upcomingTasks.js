import { removeListingElems, addListingElems } from "../projectFuncs/projectItems";
import { setUpcomingItemComplete } from "../storage/localStorageFuncs";
import { genitemDisplay, parseDateYMD, genOverDueDays, genOverDueNotice, displayitemsInList, setCurrProjectDirectoryVal, formSubmitClick } from "../todoFuncs/todoItems";
import { upcomingTaskDayRange } from "./upcomingSelect";
import { changebgColorByPriority } from "../colors/priorityColors";
import { changeBorderColorsByDueDate } from "../colors/dateColors";
import { genTodoItemForm } from "../todoFuncs/todoForms";

const getTodayDate = () => {
    const dateObj = new Date();
    dateObj.setHours(0, 0, 0); //set to the very start of the current day
    return dateObj;
}

const getDateofNDaysLater = (nDays) => {
    const nDaysLaterObj = getTodayDate();
    nDaysLaterObj.setDate(nDaysLaterObj.getDate() + nDays);
    nDaysLaterObj.setHours(23, 59, 59); // keeps range to the very end of the end date
    console.log('NDAYSLATER', nDaysLaterObj)
    return nDaysLaterObj;
}

const filterItemsWithinNDays = (currDateObj, nDays) => {
    const nDaysLaterDate = getDateofNDaysLater(nDays);
    const kvpairofProjectItemsWithinNDays = {}

    for (let i = 0; i < localStorage.length; i++) {
        const projectName = localStorage.key(i);
        const listofItemsInProjectWithinRange = (JSON.parse(localStorage.getItem(projectName))).filter(function(item) {
            console.log('ITEM BEING FILTERED', item);
            // const itemDueDateParsed = (item.dueDate).split('-');
            const itemDueDateParsed = parseDateYMD(item.dueDate);
            // console.log('ITEM PARSED DATE', itemDueDateParsed);
            const itemDueDateObj = new Date(itemDueDateParsed[0], itemDueDateParsed[1], itemDueDateParsed[2]);
            // console.log('ITEMDUEDATEOBJ', itemDueDateObj, 'NDAYSLATER', nDaysLaterDate);
            if (itemDueDateObj.getTime() <= nDaysLaterDate.getTime() && item.complete != true) {
                return itemDueDateObj;
            };
        });
        console.log('filteredList', listofItemsInProjectWithinRange);
        kvpairofProjectItemsWithinNDays[projectName] = listofItemsInProjectWithinRange;
    }
    console.log('filtered upcoming', kvpairofProjectItemsWithinNDays);
    return kvpairofProjectItemsWithinNDays; // {projectName : [filtered List]}
}

const clearUpcomingSectionList = () => {
    const upcomingSection = document.getElementById('listing_upcoming');
    while (upcomingSection.childNodes.length > 1 ) { // removes everything but keeps the select elem
        upcomingSection.removeChild(upcomingSection.lastChild);
    }
}

const genUpcomingItemDisplay = (todo_item, projectName) => {
    const todoitem_displayBox = document.createElement('div');
    todoitem_displayBox.className = 'todo_item_displaybox'

    const displayProjectName = document.createElement('div');
    displayProjectName.id = `display_projectName_${projectName}`;
    // displayProjectName.innerText = ;

    const projectNameAnchor = document.createElement('a');
    projectNameAnchor.setAttribute('href', '#');
    projectNameAnchor.setAttribute('class', 'nav_item_anchor')
    projectNameAnchor.innerText = `Go to ${projectName} >>>`
    displayProjectName.appendChild(projectNameAnchor);



    const displayTitle = document.createElement('div');
    displayTitle.className = 'display_title';
    displayTitle.innerText = todo_item.title;

    const displayDatesContainer = document.createElement('div');
    displayDatesContainer.className = 'display_datescontainer';

    const overdueNotice = genOverDueNotice(todo_item)
    const displayDate = document.createElement('div');
    displayDate.className = 'display_date';
    displayDate.innerText = `Due on: ${todo_item.dueDate}` + " " + overdueNotice;



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

    const displayDesc = document.createElement('div');
    
    const displayDescHead = document.createElement('div');
    displayDescHead.innerText = 'Notes:';
    const displayDescContent = document.createElement('p');
    displayDescContent.className = 'desc_content'
    displayDescContent.innerText = todo_item.description;
    
    displayDesc.append(displayDescHead, displayDescContent)

    const displayComplete = document.createElement('button');
    displayComplete.id = `upcoming_complete_${todo_item.title}_${todo_item.id}`;
    displayComplete.innerText = 'Complete Task';

    todoitem_displayBox.append(
        displayProjectName,
        displayTitle,
        displayDate,
        displayPriority,
        displayDesc,
        displayComplete
    )

    changebgColorByPriority(todo_item, todoitem_displayBox);
    changeBorderColorsByDueDate(overdueNotice, todoitem_displayBox)
    return todoitem_displayBox;
}

const upcomingTaskProjectNameClick = (projectName) => {
    const allCurrProjectNameTasks = document.querySelectorAll(`#display_projectName_${projectName}`);
    allCurrProjectNameTasks.forEach(
        (projectNameSection) => {
            projectNameSection.addEventListener('click', ()=> {
            genTodoItemForm(); //show the todo form and add its listener
            formSubmitClick();
            removeListingElems();
            addListingElems();
            setCurrProjectDirectoryVal(projectName);
            displayitemsInList();
            console.log('redirected from a upcoming task project name click!')
        });
    });
}

const upcomingTaskCompleteClick = (todo_item, projectName) => {
    const upcomingTaskCompleteButton = document.getElementById(`upcoming_complete_${todo_item.title}_${todo_item.id}`)
    upcomingTaskCompleteButton.addEventListener('click', () => {
        upcomingTaskCompleteButton.parentElement.remove();
        setUpcomingItemComplete(todo_item, projectName);
    })
}

const displayAllUpcomingTasks = (nDays) => {
    const upcomingSection = document.getElementById('listing_upcoming');
    const upcomingTasks = filterItemsWithinNDays(getTodayDate(), nDays);
    console.log('UPCOMING TASKS', upcomingTasks);
    clearUpcomingSectionList(); //clears all upcoming task but keeps the upcoming due date select option
    for (let projectName in upcomingTasks) {
        const filteredTaskItemList = upcomingTasks[projectName];
        console.log('filteredTaskItemList',filteredTaskItemList);
        for (let i = 0; i < filteredTaskItemList.length; i++) {
            const currUpcomingTaskItemDisplay = genUpcomingItemDisplay(filteredTaskItemList[i], projectName);
            upcomingSection.append(currUpcomingTaskItemDisplay);
            upcomingTaskCompleteClick(filteredTaskItemList[i], projectName)
        }
        const projectId = projectName; // just for clarification's sake
        upcomingTaskProjectNameClick(projectId);
    }
}



export {displayAllUpcomingTasks}