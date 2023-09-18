import { homePageSectionSetup } from "./pageSections";
import { genTodoItemForm } from "./todoForms";
import { formSubmitClick } from "./todoItems";
import { genProjectForm } from "./projectForm";
import { genProjectClick, projectNavListSetup } from "./projectItems";
import "./style.css";

homePageSectionSetup();
projectNavListSetup();
genTodoItemForm();
genProjectForm();
formSubmitClick();
genProjectClick();