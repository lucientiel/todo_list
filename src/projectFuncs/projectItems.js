import { setCurrProjectDirectoryVal, displayitemsInList, formSubmitClick } from "../todoFuncs/todoItems";
import { addNewDirectorytoLocalStorage, checkProjectNameUniqueness} from "../storage/localStorageFuncs";
import { genTodoItemForm } from "../todoFuncs/todoForms";
import { deleteProjectButton, deleteProjectButtonClick } from "./projectDelete";
import { escapeInputStr } from "../sanitization/escapeInputs";


const genProjectClick = () => { // create a new project directory, add it to the project listing object and call addtoProjectNavList to display on page navlist
    const projectNameForm = document.getElementById('project_name_form');
    projectNameForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formVals = new FormData(projectNameForm);
        const escapedProjectNameFormVal = escapeInputStr(formVals.get('project_name_input'));
        if (checkProjectNameUniqueness(escapedProjectNameFormVal) == false) {
            alert('Name already used, try a different one!')
        }
        else if (escapedProjectNameFormVal.length < 1) {
            alert('A name of 1 character or greater is required to open a project.')
        }
        else {
                addNewDirectorytoLocalStorage(escapedProjectNameFormVal);
                console.log('LOCAL STORAGE', localStorage);
                addtoProjectNavList(escapedProjectNameFormVal, escapedProjectNameFormVal);
        }
        projectNameForm.reset()
    })
}


const genNavListItem = (idName, projectName) => { //gen nav list elem for project
    const listItem = document.createElement('li');
    listItem.id = idName;
    listItem.className = 'project_list_item';
    const navItemAnchor = document.createElement('a');
    navItemAnchor.id = `${projectName}_anchor`;
    navItemAnchor.setAttribute('href', '#');
    navItemAnchor.setAttribute('class', 'nav_item_anchor');
    navItemAnchor.innerText = projectName;
    listItem.appendChild(navItemAnchor);
    return listItem;
}

const projectNavListSetup = () => { // initialize default project nav list with default items 
    const sideBar = document.getElementById('sidebar_elem');

    const navListHead = document.createElement('h2');
    navListHead.id = 'project_name_navlisthead';
    navListHead.innerText = 'Project Directory'

    const navList = document.createElement('ul');
    navList.id = 'project_name_navlist';

    //the defaults that will always be there on the nav bar
    for (let i = 0; i < localStorage.length; i++) {
        const project_name = localStorage.key(i);
        const projectNavItem = genNavListItem(project_name, project_name);
        projectNavItem.appendChild(deleteProjectButton(project_name));
        navList.appendChild(projectNavItem);
    }
    sideBar.append(navListHead, navList);

    for (let i = 0; i < localStorage.length; i++) {// only when the navlist is appended to the sidebar would the navlist become readable, when it is initialized its basically in purgatory
        const project_name = localStorage.key(i);
        genCurrDirectoryNavClick(project_name);
        deleteProjectButtonClick(project_name);

    }
}

const addtoProjectNavList = (idName, projectName) => { // add individual submitted project directory to display on navlist
    const navList = document.getElementById('project_name_navlist');

    const navItem = genNavListItem(idName, projectName);
    const navItemDeleteButton = deleteProjectButton(projectName)
    navItem.appendChild(navItemDeleteButton)
    navList.append(navItem);
    genCurrDirectoryNavClick(idName);
    deleteProjectButtonClick(projectName);
};

const removeListingElems = () => { //removes listingElem_label and listingElem, as well as listingComplete_label and listingCompleteElem
    const listing_container = document.getElementById('listing_container');
    while (listing_container.childNodes.length > 2) { // 2 bc the display modal is the first child, the listing head is second child
        listing_container.removeChild(listing_container.lastChild);
    }
}

const addListingElems = () => { //addes listing_elem and lstingcompelte_elem into page via a umbrella listing_container div
    const listing_container = document.getElementById('listing_container');
    const listingElem_label = document.createElement('h2');
    listingElem_label.innerText = 'Tasks'
    const listingElem = document.createElement('div');
    listingElem.id = 'listing_elem';

    const listingComplete_label = document.createElement('h2');
    listingComplete_label.innerText = 'Completed Tasks'
    const listingCompleteElem = document.createElement('div');
    listingCompleteElem.id = 'listing_complete_elem';

    listing_container.append(listingElem_label, listingElem, 
        listingComplete_label, listingCompleteElem);
}

const genCurrDirectoryNavClick = (projectId) => { //navigating to the project user clicks on
    const currNavItem = document.getElementById(`${projectId}_anchor`);

    currNavItem.addEventListener('click', () => {
        if (document.getElementById('todo_form_container') == null ) {
            genTodoItemForm(); // show todo creation form on sidebar
            formSubmitClick();
        }

        removeListingElems(); //removes any listing_elem div and listingcomplete_elem div from page
        addListingElems(); //adds listing_elem div and listingcomplete_elem div to page

        setCurrProjectDirectoryVal(projectId); //currProjectDirectory = projectId
   
        displayitemsInList(); // this function will update list_head content as well
        console.log('display all project directory and item contents')
    })
}

export { genProjectClick, projectNavListSetup, removeListingElems, addListingElems }