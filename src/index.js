import { homePageSectionSetup } from "./pageSections";
import { genProjectForm } from "./projectFuncs/projectForm";
import { genProjectClick, projectNavListSetup } from "./projectFuncs/projectItems";
import { genDefaultDirectory } from "./storage/localStorageFuncs";
import "./style.css";
import { displayAllUpcomingTasks } from "./upcoming/upcomingTasks";

const initializePage = () => {
    genDefaultDirectory();
    homePageSectionSetup();
    projectNavListSetup();
    genProjectForm();
    genProjectClick();
    displayAllUpcomingTasks(0);
}

initializePage();