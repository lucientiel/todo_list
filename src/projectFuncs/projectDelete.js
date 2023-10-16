import { deleteDirectoryFromLocalStorage } from "../storage/localStorageFuncs";
import { currProjectDirectory, exitProject } from "../todoFuncs/todoItems";

const deleteProjectButton = (projectName) => {
    const delProjectButtonElem = document.createElement('button');
    delProjectButtonElem.className = 'delete_project_button'
    delProjectButtonElem.id = `delete_${projectName}`
    delProjectButtonElem.innerText = 'Delete Project';

    return delProjectButtonElem
}


const deleteProjectButtonClick = (projectName) => {
    const delProjectButtonElem = document.getElementById(`delete_${projectName}`);
    delProjectButtonElem.addEventListener('click', ()=>{
        if (currProjectDirectory == projectName) { //indicates we are currently in the project
            delProjectButtonElem.parentElement.remove()
            deleteDirectoryFromLocalStorage(projectName);
            exitProject(); //clears page and adds upcoming task elements

        } else if (currProjectDirectory == undefined) { //indicate we are in upcoming page
            delProjectButtonElem.parentElement.remove()
            deleteDirectoryFromLocalStorage(projectName);
            exitProject(); //technically refreshes the page
        }
        else { // indicate we are in some other project page
            delProjectButtonElem.parentElement.remove()
            deleteDirectoryFromLocalStorage(projectName);

        }
    })
}

export {deleteProjectButton, deleteProjectButtonClick}