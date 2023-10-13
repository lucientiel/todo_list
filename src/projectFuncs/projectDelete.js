import { currProjectDirectory } from "../todoFuncs/todoItems";

const deleteProjectButton = (projectName) => {
    const delProjectButtonElem = document.createElement('button');
    delProjectButtonElem.className = 'delete_project_button'
    delProjectButtonElem.id = `delete_${projectName}`
    delProjectButtonElem.innerText = 'Delete';

    return delProjectButtonElem
}


const deleteProjectButtonClick = (projectName) => {
    const delProjectButtonElem = document.getElementById(`delete_${projectName}`);
    delProjectButtonElem.addEventListener('click', ()=>{
        if (currProjectDirectory == projectName) { //indicates we are currently in the project
            delProjectButtonElem.parentElement.remove()
            

        } else if (currProjectDirectory == undefined) { //indicate we are in upcoming page
            delProjectButtonElem.parentElement.remove()

        }
        else { // indicate we are in some other project page
            delProjectButtonElem.parentElement.remove()

        }
    })
}

export {deleteProjectButton, deleteProjectButtonClick}