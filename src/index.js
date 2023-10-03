import { homePageSectionSetup } from "./pageSections";
import { genTodoItemForm } from "./todoFuncs/todoForms";
import { formSubmitClick } from "./todoFuncs/todoItems";
import { genProjectForm } from "./projectFuncs/projectForm";
import { genProjectClick, projectNavListSetup } from "./projectFuncs/projectItems";
import { genDefaultDirectory } from "./storage/localStorageFuncs";
import "./style.css";
import { displayAllUpcomingTasks } from "./upcomingTasks";


// localStorage.removeItem('project_1');
// localStorage.clear();
genDefaultDirectory();
homePageSectionSetup();
projectNavListSetup();
genTodoItemForm();
genProjectForm();
formSubmitClick();
genProjectClick();
displayAllUpcomingTasks(0);