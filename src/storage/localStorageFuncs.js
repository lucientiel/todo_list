
// const projectListingObject = {
//     'project_1' : []
// }

import { currProjectDirectory } from "../todoFuncs/todoItems";


// const todoItemInsertionVersionObject = (title, desc, duedate, priority, creationdate, editdate, id, complete, completedate) => {
//     return {
//         "title": title,
//         "desc" : desc,
//         "duedate" : duedate,
//         "priority": priority,
//         "creationdate": creationdate,
//         "editdate": editdate,
//         "id" :  id,
//         "complete": complete,
//         "completedate": completedate
//     }
// }
const parseCurrentDirectory = () => {
    const currDirectoryList = localStorage.getItem(currProjectDirectory);
    const parsedCurrDirectory = JSON.parse(currDirectoryList);
    return parsedCurrDirectory;
}

const genDefaultDirectory = () => {
    //check if any directories exist, if not, then generate a default one
    if (checkIfAnyDirectoriesExist() == false) {
            localStorage.setItem('project_1', JSON.stringify([]));
    }

}

const checkIfAnyDirectoriesExist = () => {
    if (localStorage.length > 0) {
        return true;
    }
    else {
        return false;
    }
}

const addNewDirectorytoLocalStorage = (directoryName) => {
    localStorage.setItem(directoryName, JSON.stringify([]));
}

const checkProjectNameUniqueness = (projname) => {
    let uniquebool = true;
    for (let i = 0; i < localStorage.length; i++) {
        const currStoredProjectNameValue = localStorage.key(i);
        if (projname == currStoredProjectNameValue) {
            uniquebool == false;
        }
    }
    return uniquebool;
}
const getCurrProjectDirectoryList = (directoryName) => {
    return JSON.parse(localStorage.getItem(directoryName));
}
const getCurrProjectDirectoryLength = (directoryName) => {
    const currProjectDirectoryList = JSON.parse(localStorage.getItem(directoryName));
    console.log('currProjectDirectoryList',currProjectDirectoryList, directoryName)
    return currProjectDirectoryList.length;
}

const insertItemToList = (todo_item) => {
    // console.log('INSERTING THIS INTO DIRECTORY', todo_item, todo_item.getTitle(), todo_item.getDesc(), todo_item.getDueDate())
    // const currDirectoryList = localStorage.getItem(currProjectDirectory);
    // const parsedCurrDirectoryList = JSON.parse(currDirectoryList);
    const parsedCurrDirectoryList = parseCurrentDirectory();
    //JSON may not support date object
    // const itemObjJSONver = todoItemInsertionVersionObject(todo_item.getTitle(), todo_item.getDesc(), todo_item.getDueDate(), todo_item.getPriority(), todo_item.getCreationDate(), todo_item.getEditedDate(), todo_item.id, todo_item.getComplete(), todo_item.getCompletedDate)
    parsedCurrDirectoryList.push(todo_item);
    console.log('AFTER PUSHING', parsedCurrDirectoryList, todo_item)
    const stringifiedcurrProjectDirectoryList = JSON.stringify(parsedCurrDirectoryList)
    console.log(stringifiedcurrProjectDirectoryList);
    localStorage.setItem(currProjectDirectory, stringifiedcurrProjectDirectoryList);
}

const deleteItemfromDirectory = (todo_item) => {
    // const currDirectoryList = localStorage.getItem(currProjectDirectory);
    // const parsedCurrDirectoryList = JSON.parse(currDirectoryList);
    const parsedCurrDirectoryList = parseCurrentDirectory();
    const filteredDirectory = parsedCurrDirectoryList.filter(item => item.id != todo_item.id);
    const stringifiedDirectoryList = JSON.stringify(filteredDirectory);
    localStorage.setItem(currProjectDirectory, stringifiedDirectoryList);
}

const getCurrItem = (idx) => {
    // const currDirectoryList = localStorage.getItem(currProjectDirectory);
    // const parsedCurrDirectoryList = JSON.parse(currDirectoryList);
    const parsedCurrDirectoryList = parseCurrentDirectory();
    console.log('GET CURR ITEM', currProjectDirectory, currProjectDirectory, parsedCurrDirectoryList, idx);
    return parsedCurrDirectoryList[idx];
}
const getCurrItemIndex = (todo_item) => {
    // const currDirectoryList = localStorage.getItem(currProjectDirectory);
    // const parsedCurrDirectoryList = JSON.parse(currDirectoryList);
    const parsedCurrDirectoryList = parseCurrentDirectory();
    for (let i = 0; i < parsedCurrDirectoryList.length; i++) {
        const currItem = parsedCurrDirectoryList[i]
        if (currItem.id == todo_item.id) {
            console.log('THIS IS THE INDEX OF THE ITEM IN THE PROJECT DIRECTORY')
            return i
        }
    }
}
const editItemInDirectory = (form_val, item_idx) => {
    // const currDirectoryList = localStorage.getItem(currProjectDirectory);
    // const parsedCurrDirectoryList = JSON.parse(currDirectoryList);
    const parsedCurrDirectoryList = parseCurrentDirectory();
    console.log('parsedCurrDirectoryList', parsedCurrDirectoryList, item_idx, parsedCurrDirectoryList[item_idx])

    parsedCurrDirectoryList[item_idx].title = form_val.get('todo_edit_title');
    parsedCurrDirectoryList[item_idx].description = form_val.get('todo_edit_desc');
    parsedCurrDirectoryList[item_idx].dueDate = form_val.get('todo_edit_duedate');
    parsedCurrDirectoryList[item_idx].priority = form_val.get('todo_edit_priority');
    parsedCurrDirectoryList[item_idx].editedDate = new Date();

    const stringifiedcurrProjectDirectoryList = JSON.stringify(parsedCurrDirectoryList)
    localStorage.setItem(currProjectDirectory, stringifiedcurrProjectDirectoryList);
}

// const filterItemsWithinNDays = (currDateObj, nDays) => {
//     const nDaysLaterDate = getDateofNDaysLater(nDays);
//     const kvpairofProjectItemsWithinNDays = {}
//     for (let projectName in projectListingObject) {
//         const listofItemsInProjectWithinRange = (projectListingObject[projectName]).filter(function(item) {
//             console.log('ITEM BEING FILTERED', item);
//             // const itemDueDateParsed = (item.getDueDate()).split('-');
//             const itemDueDateParsed = parseDateYMD(item.getDueDate());
//             console.log('ITEM PARSED DATE', itemDueDateParsed);
//             const itemDueDateObj = new Date(itemDueDateParsed[0], itemDueDateParsed[1], itemDueDateParsed[2]);
//             console.log('ITEMDUEDATEOBJ', itemDueDateObj, 'NDAYSLATER', nDaysLaterDate);
//             if (itemDueDateObj.getTime() <= nDaysLaterDate.getTime() && item.getComplete() != true) {
//                 return itemDueDateObj;
//             };
//         });
//         console.log('filteredList', listofItemsInProjectWithinRange);
//         kvpairofProjectItemsWithinNDays[projectName] = listofItemsInProjectWithinRange;
//     }
//     console.log('filtered upcoming', kvpairofProjectItemsWithinNDays);
//     return kvpairofProjectItemsWithinNDays; // {projectName : [filtered List]}
// }

const setItemComplete = (todo_item) => {
    // const currDirectoryList = localStorage.getItem(currProjectDirectory);
    // const parsedCurrDirectoryList = JSON.parse(currDirectoryList);
    const parsedCurrDirectoryList = parseCurrentDirectory();
    const itemStorageIndex = getCurrItemIndex(todo_item);
    parsedCurrDirectoryList[itemStorageIndex].complete = true;
    parsedCurrDirectoryList[itemStorageIndex].completedDate = new Date();

    const stringifiedcurrProjectDirectoryList = JSON.stringify(parsedCurrDirectoryList)
    localStorage.setItem(currProjectDirectory, stringifiedcurrProjectDirectoryList);
}

export { setItemComplete, getCurrItem, getCurrItemIndex, editItemInDirectory, genDefaultDirectory, addNewDirectorytoLocalStorage, checkProjectNameUniqueness, getCurrProjectDirectoryList, getCurrProjectDirectoryLength, insertItemToList, deleteItemfromDirectory}