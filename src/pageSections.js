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

    const listingContainer = document.createElement('div');
    listingContainer.id = 'listing_container';

    const listingHead = document.createElement('div');
    listingHead.id = 'listing_head';
    listingHead.innerText = 'Please select a project directory!'

    const listingElem = document.createElement('div');
    listingElem.id = 'listing_elem';

    listingContainer.append(listingHead, listingElem);
    contentDiv.appendChild(listingContainer);
}


const homePageSectionSetup = () => {
    sideBarSection();
    listingSection();
};


export { homePageSectionSetup }