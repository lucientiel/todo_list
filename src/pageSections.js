import { upcomingTaskDayRange } from "./upcoming/upcomingSelect";
import { selectUpcomingDuedTasksDaysOptionClick } from "./upcoming/upcomingSelectEvents";

const sideBarSection = () => {
    const contentDiv = document.getElementById('content');

    const sideBarContainer = document.createElement('div');
    sideBarContainer.id = 'sidebar_container';

    const sideBarElem = document.createElement('div');
    sideBarElem.id = 'sidebar_elem'

    sideBarContainer.appendChild(sideBarElem);
    contentDiv.appendChild(sideBarContainer);
}


const listingSection  = () => {
    const contentDiv = document.getElementById('content');

    const displayModal = document.createElement('dialog');
    displayModal.id = 'display_modal';

    const listingContainer = document.createElement('div');
    listingContainer.id = 'listing_container';

    const listingHead = document.createElement('h2');
    listingHead.id = 'listing_head'; //contains project name and amount of todos
    listingHead.innerText = 'Upcoming Tasks'

    const listingUpcoming = document.createElement('div');
    listingUpcoming.id = 'listing_upcoming';

    listingUpcoming.appendChild(upcomingTaskDayRange());
    

    listingContainer.append(displayModal, listingHead, listingUpcoming);
    contentDiv.appendChild(listingContainer);

    selectUpcomingDuedTasksDaysOptionClick();
}

const footerSection = () => {
    const contentDiv = document.getElementById('content');

    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer_container';

    const sourceInspirationDiv = document.createElement('div');
    sourceInspirationDiv.innerText = 'Inspired By: '

    const sourceAnchor = document.createElement('a');
    sourceAnchor.setAttribute('href', "https://www.theodinproject.com/lessons/node-path-javascript-todo-list");
    sourceAnchor.innerText = "The Odin Project's Todo List Project";

    sourceInspirationDiv.appendChild(sourceAnchor);

    footerContainer.append(sourceInspirationDiv);
    contentDiv.append(footerContainer);

}

const homePageSectionSetup = () => {
    sideBarSection();
    listingSection();
    footerSection();
};


export { homePageSectionSetup }