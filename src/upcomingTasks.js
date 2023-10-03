import { removeListingElems, addListingElems } from "./projectItems";
import { genitemDisplay, parseDateYMD, genOverDueDays, genOverDueNotice, changebgColorByPriority, displayitemsInList, setCurrProjectDirectoryVal } from "./todoItems";
import { upcomingTaskDayRange } from "./upcomingSelect";

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
            // const itemDueDateParsed = (item.getDueDate()).split('-');
            const itemDueDateParsed = parseDateYMD(item.getDueDate());
            console.log('ITEM PARSED DATE', itemDueDateParsed);
            const itemDueDateObj = new Date(itemDueDateParsed[0], itemDueDateParsed[1], itemDueDateParsed[2]);
            console.log('ITEMDUEDATEOBJ', itemDueDateObj, 'NDAYSLATER', nDaysLaterDate);
            if (itemDueDateObj.getTime() <= nDaysLaterDate.getTime() && item.getComplete() != true) {
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
    todoitem_displayBox.id = 'todo_item_displaybox'

    const displayProjectName = document.createElement('div');
    displayProjectName.id = `display_projectName_${projectName}`;
    displayProjectName.innerText = `${projectName} >>>`;

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
    // genOverDueDays(todo_item);

    const displayPriority = document.createElement('div');
    displayPriority.className = 'display_priority';
    displayPriority.innerText = `Priority Level: ${todo_item.getPriority()}`;

    const displayDesc = document.createElement('p');
    displayDesc.innerText = todo_item.getDesc();
    
    // const displayComplete = document.createElement('button');
    // displayComplete.id = `complete_${todo_item.getTitle()}_${todo_item.getID()}_upcoming`;
    // displayComplete.value = `${todo_item.getIndex}`;
    // displayComplete.innerText = 'Complete Task'
    todoitem_displayBox.append(
        displayProjectName,
        displayTitle,
        displayDate,
        displayPriority,
        displayDesc,
    )

    changebgColorByPriority(todo_item, todoitem_displayBox);

    return todoitem_displayBox;
}

const upcomingTaskProjectNameClick = (projectName) => {
    const allCurrProjectNameTasks = document.querySelectorAll(`#display_projectName_${projectName}`);
    allCurrProjectNameTasks.forEach(
        (projectNameSection) => {
            projectNameSection.addEventListener('click', ()=> {
            removeListingElems();
            addListingElems();
            setCurrProjectDirectoryVal(projectName);
            displayitemsInList();
            console.log('redirected from a upcoming task project name click!')
        });
    });
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
        }
        const projectId = projectName; // just for clarification's sake
        upcomingTaskProjectNameClick(projectId);
    }
}



export {displayAllUpcomingTasks}