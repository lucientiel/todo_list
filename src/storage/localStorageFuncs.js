import { currProjectDirectory } from "../todoFuncs/todoItems";
import { escapeInputStr } from "../sanitization/escapeInputs";

const parseCurrentDirectory = () => {
    const currDirectoryList = localStorage.getItem(currProjectDirectory);
    const parsedCurrDirectory = JSON.parse(currDirectoryList);
    return parsedCurrDirectory;
}

const stringifyAndSetToLocalStorage = (directory) => {
    const stringifiedcurrProjectDirectoryList = JSON.stringify(directory);
    console.log(stringifiedcurrProjectDirectoryList)
    localStorage.setItem(currProjectDirectory, stringifiedcurrProjectDirectoryList)
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
    const parsedCurrDirectoryList = parseCurrentDirectory();
    //JSON may not support date object
    parsedCurrDirectoryList.push(todo_item);
    console.log('AFTER PUSHING', parsedCurrDirectoryList, todo_item)

    stringifyAndSetToLocalStorage(parsedCurrDirectoryList);
}

const deleteItemfromDirectory = (todo_item) => {
    const parsedCurrDirectoryList = parseCurrentDirectory();
    const filteredDirectory = parsedCurrDirectoryList.filter(item => item.id != todo_item.id);

    stringifyAndSetToLocalStorage(filteredDirectory)
}

const getCurrItem = (idx) => {
    const parsedCurrDirectoryList = parseCurrentDirectory();
    console.log('GET CURR ITEM', currProjectDirectory, currProjectDirectory, parsedCurrDirectoryList, idx);
    return parsedCurrDirectoryList[idx];
}
const getCurrItemIndex = (todo_item) => {
    const parsedCurrDirectoryList = parseCurrentDirectory();
    for (let i = 0; i < parsedCurrDirectoryList.length; i++) {
        const currItem = parsedCurrDirectoryList[i]
        if (currItem.id == todo_item.id) {
            console.log('THIS IS THE INDEX OF THE ITEM IN THE PROJECT DIRECTORY', i)
            return i
        }
    }
}
const editItemInDirectory = (form_val, item_idx) => {
    const parsedCurrDirectoryList = parseCurrentDirectory();
    console.log('parsedCurrDirectoryList', parsedCurrDirectoryList, item_idx, parsedCurrDirectoryList[item_idx])

    parsedCurrDirectoryList[item_idx].title = escapeInputStr(form_val.get('todo_edit_title'));
    parsedCurrDirectoryList[item_idx].description = escapeInputStr(form_val.get('todo_edit_desc'));
    parsedCurrDirectoryList[item_idx].dueDate = form_val.get('todo_edit_duedate');
    parsedCurrDirectoryList[item_idx].priority = form_val.get('todo_edit_priority');
    parsedCurrDirectoryList[item_idx].editedDate = new Date();

    stringifyAndSetToLocalStorage(parsedCurrDirectoryList)
}



const setItemComplete = (todo_item) => {
    const parsedCurrDirectoryList = parseCurrentDirectory();
    const itemStorageIndex = getCurrItemIndex(todo_item);
    parsedCurrDirectoryList[itemStorageIndex].complete = true;
    parsedCurrDirectoryList[itemStorageIndex].completedDate = new Date();

    stringifyAndSetToLocalStorage(parsedCurrDirectoryList);
}

const UpcomingItemStringifyAndSetToLocalStorage = (directory, projectName) => {
    const stringifiedcurrProjectDirectoryList = JSON.stringify(directory);
    console.log(stringifiedcurrProjectDirectoryList)
    localStorage.setItem(projectName, stringifiedcurrProjectDirectoryList)
}

const setUpcomingItemComplete = (todo_item, projectName) => {
    const currDirectoryList = localStorage.getItem(projectName);
    const parsedCurrDirectoryList = JSON.parse(currDirectoryList);

    const itemStorageIndex = getUpcomingCurrItemIndex(todo_item, projectName);
    parsedCurrDirectoryList[itemStorageIndex].complete = true;
    parsedCurrDirectoryList[itemStorageIndex].completedDate = new Date();

    UpcomingItemStringifyAndSetToLocalStorage(parsedCurrDirectoryList, projectName);
}

const getUpcomingCurrItemIndex = (todo_item, projectName) => {
    const currDirectoryList = localStorage.getItem(projectName);
    const parsedCurrDirectoryList = JSON.parse(currDirectoryList);
    console.log(projectName, parsedCurrDirectoryList)
    for (let i = 0; i < parsedCurrDirectoryList.length; i++) {
        const currItem = parsedCurrDirectoryList[i]
        if (currItem.id == todo_item.id) {
            console.log('THIS IS THE INDEX OF THE ITEM IN THE PROJECT DIRECTORY', i)
            return i
        }
    }
}

const deleteDirectoryFromLocalStorage = (projectName) => {
    localStorage.removeItem(projectName)
}

export { setItemComplete, setUpcomingItemComplete, getCurrItem, getCurrItemIndex, editItemInDirectory, genDefaultDirectory, addNewDirectorytoLocalStorage, checkProjectNameUniqueness, getCurrProjectDirectoryList, getCurrProjectDirectoryLength, insertItemToList, deleteItemfromDirectory, deleteDirectoryFromLocalStorage}
