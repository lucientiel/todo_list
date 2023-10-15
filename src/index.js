import { homePageSectionSetup } from "./pageSections";
import { genProjectForm } from "./projectFuncs/projectForm";
import { genProjectClick, projectNavListSetup } from "./projectFuncs/projectItems";
import { genDefaultDirectory } from "./storage/localStorageFuncs";
import "./style.css";
import { displayAllUpcomingTasks } from "./upcoming/upcomingTasks";


// localStorage.removeItem('project_1');
// localStorage.clear();

// genTodoItemForm();
// formSubmitClick();


const initializeTaskList = () => {
    genProjectClick();
    displayAllUpcomingTasks(0);
    genDefaultDirectory();
    homePageSectionSetup();
    projectNavListSetup();
    genProjectForm();
}

initializeTaskList();