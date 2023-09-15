import { homePageSectionSetup } from "./homePage";
import { genTodoItemForm } from "./todoForms";
import { formSubmitClick } from "./todoItems";
import { genProjectForm } from "./projectForm";
import { genProjectClick, projectNavList } from "./projectItems";
import "./style.css";

homePageSectionSetup();
projectNavList();
genTodoItemForm();
genProjectForm();
formSubmitClick();
genProjectClick();