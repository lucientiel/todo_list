import { upcomingTaskDayRange } from "./upcomingSelect";
import { selectUpcomingDuedTasksDaysOptionClick } from "./upcomingSelectEvents";

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

    const listingHead = document.createElement('div');
    listingHead.id = 'listing_head'; //contains project name and amount of todos
    listingHead.innerText = 'Upcoming Tasks'

    const listingUpcoming = document.createElement('div');
    listingUpcoming.id = 'listing_upcoming';

    listingUpcoming.appendChild(upcomingTaskDayRange());
    

    listingContainer.append(displayModal, listingHead, listingUpcoming);
    contentDiv.appendChild(listingContainer);

    selectUpcomingDuedTasksDaysOptionClick();
}


const homePageSectionSetup = () => {
    sideBarSection();
    listingSection();
};


export { homePageSectionSetup }