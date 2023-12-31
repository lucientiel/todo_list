import { displayitemsInList, clearAllItemInDisplay, currProjectDirectory, genitemDisplay, genCompletedItemDisplay, todoDeleteClick, todoEditClick, todoCompleteClick } from "../todoFuncs/todoItems";
import { getCurrItem, getCurrProjectDirectoryList, getCurrProjectDirectoryLength } from "../storage/localStorageFuncs";

const sortOptionChange = () => {
    const sortDropDown = document.getElementById('sort_order');

    sortDropDown.addEventListener('change', (e) => {
        const selectedOption = e.target.value;
        if (selectedOption == 'recency_otn') {
            recencySortDisplay_otn();
        }
        else if (selectedOption == 'recency_nto') {
            recencySortDispay_nto();
        }
        else if (selectedOption == 'duedate_etl') {
            duedateSortDisplay_etl();
        }
        else if (selectedOption == 'duedate_lte') {
            duedateSortDisplay_lte();
        }
        else if (selectedOption == 'priority_lth') {
            prioritySortDisplay_lth();
        }
        else if (selectedOption == 'priority_htl') {
            prioritySortDisplay_htl();
        };
    });
}

const recencySortDisplay_otn = () => {
    clearAllItemInDisplay();
    const contentdiv = document.getElementById('listing_elem');
    const contentdivcomplete = document.getElementById('listing_complete_elem');

    for (let i = 0; i < getCurrProjectDirectoryLength(currProjectDirectory); i++) {
        const currTodoItem = getCurrItem(i);
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
    console.log('SORTED BY RECENCY OLD TO NEW')
};

const recencySortDispay_nto = () => {
    clearAllItemInDisplay();
    const contentdiv = document.getElementById('listing_elem');
    const contentdivcomplete = document.getElementById('listing_complete_elem');

    for (let i = getCurrProjectDirectoryLength(currProjectDirectory) - 1 ; i >= 0; i--) {
        const currTodoItem = getCurrItem(i);
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
    console.log('SORTED BY RECENCY NEW TO OLD')
};

const duedateSortDisplay_etl = () => {
    clearAllItemInDisplay();
    const contentdiv = document.getElementById('listing_elem');
    const contentdivcomplete = document.getElementById('listing_complete_elem');

    const sortedDirectory = (getCurrProjectDirectoryList(currProjectDirectory)).concat([]).sort(function(a, b) {
        console.log(a, b);
        const date_a = new Date(a.dueDate);
        const date_b = new Date(b.dueDate);
        if (date_a < date_b) {
            return -1;
        }
        else if (date_a == date_b) {
            return 0;
        }
        else if (date_a > date_b) {
            return 1
        }
    });

    for (let i = 0; i < sortedDirectory.length; i++) {
        const currTodoItem = sortedDirectory[i];
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
    console.log('SORTED BY DUE DATE EARLY TO LATE')
};

const duedateSortDisplay_lte = () => {
    clearAllItemInDisplay();
    const contentdiv = document.getElementById('listing_elem');
    const contentdivcomplete = document.getElementById('listing_complete_elem');

    const sortedDirectory = (getCurrProjectDirectoryList(currProjectDirectory)).concat([]).sort(function(a, b) {
        const date_a = new Date(a.dueDate);
        const date_b = new Date(b.dueDate);
        if (date_a < date_b) {
            return 1;
        }
        else if (date_a == date_b) {
            return 0;
        }
        else if (date_a > date_b) {
            return -1;
        }
    });
    for (let i = 0; i < sortedDirectory.length; i++) {
        const currTodoItem = sortedDirectory[i];
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
    console.log('SORTED BY DUE DATE LATE TO EARLY')
};

const prioritySortDisplay_lth = () => {
    clearAllItemInDisplay();
    const contentdiv = document.getElementById('listing_elem');
    const contentdivcomplete = document.getElementById('listing_complete_elem');

    const sortedDirectory = (getCurrProjectDirectoryList(currProjectDirectory)).concat([]).sort(function(a, b) {
        const priority_a = convertPrioritytoNum(a);
        const priority_b = convertPrioritytoNum(b);
        if (priority_a < priority_b) {
            return -1;
        }
        else if (priority_a == priority_b) {
            return 0;
        }
        else if (priority_a > priority_b) {
            return 1;
        }
    });
    for (let i = 0; i < sortedDirectory.length; i++) {
        const currTodoItem = sortedDirectory[i];
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
    console.log('SORTED BY PRIORITY LOW TO HIGH')
};

const convertPrioritytoNum = (item) => {
    return item.priority == 'Low' ? -1 : item.priority == 'Medium' ? 0 : 1
}

const prioritySortDisplay_htl = () => {
    clearAllItemInDisplay();
    const contentdiv = document.getElementById('listing_elem');
    const contentdivcomplete = document.getElementById('listing_complete_elem');

    const sortedDirectory = (getCurrProjectDirectoryList(currProjectDirectory)).concat([]).sort(function(a, b) {
        const priority_a = convertPrioritytoNum(a);
        const priority_b = convertPrioritytoNum(b);
        if (priority_a < priority_b) {
            return 1;
        }
        else if (priority_a == priority_b) {
            return 0;
        }
        else if (priority_a > priority_b) {
            return -1;
        }
    });
    for (let i = 0; i < sortedDirectory.length; i++) {
        const currTodoItem = sortedDirectory[i];
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
    console.log('SORTED BY DUE DATE HIGH TO LOW')
};


export { sortOptionChange, 
    recencySortDisplay_otn, 
    recencySortDispay_nto, 
    duedateSortDisplay_etl, 
    duedateSortDisplay_lte, 
    prioritySortDisplay_lth, 
    prioritySortDisplay_htl 
}