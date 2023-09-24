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
    listingHead.innerText = 'Please select a project directory!'

    // const listingElem_label = document.createElement('div');
    // listingElem_label.innerText = 'To Dos'
    // const listingElem = document.createElement('div');
    // listingElem.id = 'listing_elem';

    // const listingComplete_label = document.createElement('div');
    // listingComplete_label.innerText = 'Completed To Dos'
    // const listingCompleteElem = document.createElement('div');
    // listingCompleteElem.id = 'listing_complete_elem';

    listingContainer.append(displayModal, listingHead);
    contentDiv.appendChild(listingContainer);
}


const homePageSectionSetup = () => {
    sideBarSection();
    listingSection();
};


export { homePageSectionSetup }