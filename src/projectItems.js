import { getCurrProjectDirectoryVal, setCurrProjectDirectoryVal, displayitemsInList } from "./todoItems";
import { sortingOptions } from "./sort/sorting";
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

const removeListingElems = () => { //removes listingElem_label and listingElem, as well as listingComplete_label and listingCompleteElem
    const listing_container = document.getElementById('listing_container');
    while (listing_container.childNodes.length > 2) { // 2 bc the display modal is the first child, the listing head is second child
        listing_container.removeChild(listing_container.lastChild);
    }
}

const addListingElems = () => { //addes listing_elem and lstingcompelte_elem into page via a umbrella listing_container div
    const listing_container = document.getElementById('listing_container');
    const listingElem_label = document.createElement('div');
    listingElem_label.innerText = 'Tasks'
    const listingElem = document.createElement('div');
    listingElem.id = 'listing_elem';

    const listingComplete_label = document.createElement('div');
    listingComplete_label.innerText = 'Completed Tasks'
    const listingCompleteElem = document.createElement('div');
    listingCompleteElem.id = 'listing_complete_elem';

    listing_container.append(listingElem_label, listingElem, 
        listingComplete_label, listingCompleteElem);
}

const genCurrDirectoryNavClick = (projectId) => { //navigating to the project user clicks on
    const currNavItem = document.getElementById(projectId);

    currNavItem.addEventListener('click', () => {
        removeListingElems(); //removes any listing_elem div and listingcomplete_elem div from page
        addListingElems(); //adds listing_elem div and listingcomplete_elem div to page

        setCurrProjectDirectoryVal(projectId);
        // const listingSectHead = document.getElementById('listing_head');
        // listingSectHead.innerText = projectId + ' ' + `${(projectListingObject[getCurrProjectDirectoryVal()]).length}/200`;
        // listingSectHead.appendChild(sortingOptions());
        // listingSectHead.innerText = "TEST ESTSETSETSE"
        // console.log('TEST TEST TEST ETST')
        displayitemsInList(); // this function will update list_head content as well
        console.log('display all project directory and item contents',projectListingObject)
    })
}
//projectListingObject is currently exported to todoitems.js might want to update the way it is accessed.
export { genProjectClick, projectNavListSetup, projectListingObject, removeListingElems }