const projectListingObject = {
    'misc' : []
}

const genProjectClick = () => {
    const projectNameForm = document.getElementById('project_name_form');
    projectNameForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formVals = new FormData(projectNameForm);
        projectListingObject[formVals.get('project_name_input')] = [];
        console.log(projectListingObject);
        addtoProjectNavList(formVals.get('project_name_input'), formVals.get('project_name_input'));
    })
}

const genNavListItem = (idName, projectName) => {
    const listItem = document.createElement('li');
    listItem.id = idName;
    listItem.innerText = projectName;
    return listItem;
}

const projectNavList = () => {
    const sideBar = document.getElementById('sidebar_elem');

    const navList = document.createElement('ul');
    navList.id = 'project_name_navlist';

    //the defaults that will always be there on the nav bar
    const allToDos = genNavListItem('all_todos', 'All');
    const upcomingToDos = genNavListItem('upcoming_todos', 'Upcoming')

    navList.append(allToDos, upcomingToDos);

    sideBar.append(navList);
}

const addtoProjectNavList = (idName, projectName) => {
    const navList = document.getElementById('project_name_navlist');
    navList.append(genNavListItem(idName, projectName));
}

export { genProjectClick, projectNavList }