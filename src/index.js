import { homePageSectionSetup } from "./pageSections";
import { genTodoItemForm } from "./todoForms";
import { formSubmitClick } from "./todoItems";
import { genProjectForm } from "./projectForm";
import { genProjectClick, projectNavListSetup } from "./projectItems";
import { genDefaultDirectory } from "./storage/localStorageFuncs";
import "./style.css";


localStorage.removeItem('project_1');

genDefaultDirectory()
homePageSectionSetup();
projectNavListSetup();
genTodoItemForm();
genProjectForm();
formSubmitClick();
genProjectClick();