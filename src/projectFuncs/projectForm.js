import { genFormInput, genLabel, genlineBreak } from "../todoFuncs/todoForms";

const genProjectForm = () => {
    const contentDiv = document.getElementById('sidebar_elem');

    const formContainer = document.createElement('div');
    formContainer.id = 'project_name_form_container';

    const projectNameFormHead = document.createElement('h2');
    projectNameFormHead.className = 'project_name_form_head';
    projectNameFormHead.innerText = 'Create a Project'

    const projectNameForm = document.createElement('form');
    projectNameForm.id = 'project_name_form'


    const projectNameInput = genFormInput('input', 'text', 'project_name_input', 'project_name_input');
    const projectNameLabel = genLabel('project_name_input', 'Project Name: ');

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'project_name_submit';
    submitButton.setAttribute('form', 'project_name_form');
    submitButton.innerText = 'Create Project';

    projectNameForm.append(projectNameLabel, projectNameInput, 
        genlineBreak(),
        submitButton);
    formContainer.append(projectNameFormHead, projectNameForm);

    contentDiv.appendChild(formContainer);
}

export { genProjectForm }