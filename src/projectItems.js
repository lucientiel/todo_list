import { getCurrProjectDirectoryVal, setCurrProjectDirectoryVal, displayitemsInList } from "./todoItems";
const projectListingObject = {
    'project_1' : []
}

const genProjectClick = () => { // create a new project directory, add it to the project listing object and call addtoProjectNavList to display on page navlist
    const projectNameForm = document.getElementById('project_name_form');
    projectNameForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formVals = new FormData(projectNameForm);
        if (checkProjectNameUniqueness(formVals.get('project_name_input')) == false) {
            alert('Name already used, try a different one!')
        }
        else {
                    projectListingObject[formVals.get('project_name_input')] = [];
        console.log(projectListingObject);
        addtoProjectNavList(formVals.get('project_name_input'), formVals.get('project_name_input'));
        }
    })
}

const checkProjectNameUniqueness = (projname) => {
    let uniquebool = true;
    for (let key in projectListingObject) {
        if (projname == key) {
            uniquebool = false;
        }
    }
    return uniquebool;
}

const genNavListItem = (idName, projectName) => { //gen nav list elem for project
    const listItem = document.createElement('li');
    listItem.id = idName;
    listItem.innerText = projectName;
    return listItem;
}

const projectNavListSetup = () => { // initialize default project nav list with default items 
    const sideBar = document.getElementById('sidebar_elem');

    const navList = document.createElement('ul');
    navList.id = 'project_name_navlist';

    //the defaults that will always be there on the nav bar
    for (let key in projectListingObject) {
        const projectNavItem = genNavListItem(key, key);
        navList.appendChild(projectNavItem);
        // genCurrDirectoryNavClick(key);
        // addtoProjectNavList(key, key);
    }
    sideBar.append(navList);

    for (let key in projectListingObject) { // only when the navlist is appended to the sidebar would the navlist become readable, when it is initialized its basically in purgatory
        genCurrDirectoryNavClick(key);
    }
}

const addtoProjectNavList = (idName, projectName) => { // add individual submitted project directory to display on navlist
    const navList = document.getElementById('project_name_navlist');

    navList.append(genNavListItem(idName, projectName));
    genCurrDirectoryNavClick(idName);
};

const genCurrDirectoryNavClick = (projectId) => {
    const currNavItem = document.getElementById(projectId);

    currNavItem.addEventListener('click', () => {
        // currProjectDirectory = projectId;
        setCurrProjectDirectoryVal(projectId);
        const listingSectHead = document.getElementById('listing_head');
        listingSectHead.innerText = projectId + ' ' + `${(projectListingObject[getCurrProjectDirectoryVal()]).length}/200`;
        displayitemsInList();
        console.log('display all project directory and item contents',projectListingObject)
    })
}
//projectListingObject is currently exported to todoitems.js might want to update the way it is accessed.
export { genProjectClick, projectNavListSetup, projectListingObject }