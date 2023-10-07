const genFormInput = (tag, type, id, name) => {
    const newElem = document.createElement(tag);
    if (tag = 'input') {
            newElem.setAttribute('type', type);
    }
    newElem.setAttribute('id', id);
    newElem.setAttribute('name', name);
    return newElem;
}

const genLabel = (forValue, textValue) => {
    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', forValue);
    newLabel.innerText = textValue;
    return newLabel;
}

const genlineBreak = () => {
    return document.createElement('br');
}

const genTodoItemForm = () => {
    const contentDiv = document.getElementById('sidebar_elem');

    const formContainer = document.createElement('div');
    formContainer.id = 'todo_form_container';

    const createItemForm = document.createElement('form');
    createItemForm.id = 'todo_item_form'

    const titleInput = genFormInput('input', 'text', 'todo_item_title', 'todo_item_title');
    titleInput.required = true;
    const descInput = genFormInput('textarea', '', 'todo_item_desc', 'todo_item_desc');
    descInput.required = true;
    const dueDateInput = genFormInput('input', 'date', 'todo_item_duedate', 'todo_item_duedate');
    dueDateInput.required = true;
    const priorityInput_low = genFormInput('input', 'radio', 'todo_item_priority', 'todo_item_priority');
    priorityInput_low.setAttribute('value', 'Low');
    priorityInput_low.required = true;
    const priorityInput_med = genFormInput('input', 'radio', 'todo_item_priority', 'todo_item_priority');
    priorityInput_med.setAttribute('value', 'Medium');
    const priorityInput_high = genFormInput('input', 'radio', 'todo_item_priority', 'todo_item_priority');
    priorityInput_high.setAttribute('value', 'High');

    const titleLabel = genLabel('todo_item_title', 'Title');
    const descLabel =  genLabel('todo_item_desc', 'Description');
    const dueDateLabel =  genLabel('todo_item_duedate', 'Due Date');
    const priorityLabel =  genLabel('todo_item_priority', 'Priority');
    const priority_low_label =  genLabel('todo_item_title', 'Low');
    const priority_med_label=  genLabel('todo_item_title', 'Medium');
    const priority_high_label =  genLabel('todo_item_title', 'High');

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'todo_item_submit';
    submitButton.setAttribute('form', 'todo_item_form');
    submitButton.innerText = 'Create Item';


    createItemForm.append(
        titleLabel, titleInput,
        genlineBreak(),
        descLabel, descInput,
        genlineBreak(),
        dueDateLabel, dueDateInput,
        genlineBreak(),
        priorityLabel,
        genlineBreak(),
        priorityInput_low, priority_low_label,
        genlineBreak(),
        priorityInput_med, priority_med_label,
        genlineBreak(),
        priorityInput_high, priority_high_label,
        genlineBreak(),
        submitButton
    );

    formContainer.append(createItemForm);

    contentDiv.append(formContainer);
}

const genEditTodoForm = (todo_item) => {

    const editFormContainer = document.createElement('div');
    editFormContainer.id = 'edit_form_container';

    const editForm = document.createElement('form');
    editForm.id = 'edit_form';

    const editTitle = genFormInput('input', 'text', 'todo_edit_title', 'todo_edit_title');
    editTitle.setAttribute('value', todo_item.title);

    const editDesc =  genFormInput('textarea', '', 'todo_edit_desc', 'todo_edit_desc');
    editDesc.defaultValue = todo_item.description;

    const editDate =  genFormInput('input', 'date', 'todo_edit_duedate', 'todo_edit_duedate');
    editDate.defaultValue = todo_item.dueDate;

    const editPriority_low =  genFormInput('input', 'radio', 'todo_edit_priority', 'todo_edit_priority');
    editPriority_low.setAttribute('value', 'Low');
    editPriority_low.required = true;

    const editPriority_med = genFormInput('input', 'radio', 'todo_edit_priority', 'todo_edit_priority');
    editPriority_med.setAttribute('value', 'Medium');
    
    const editPriority_high = genFormInput('input', 'radio', 'todo_edit_priority', 'todo_edit_priority');
    editPriority_high.setAttribute('value', 'High');

    if (todo_item.priority == 'Low') {
        editPriority_low.checked = true;
    }
    else if (todo_item.priority == 'Medium') {
        editPriority_med.checked = true;
    }
    else {
        editPriority_high.checked = true;
    }

    const editTitleLabel = genLabel('todo_edit_title', 'Title');
    const editDescLabel =  genLabel('todo_edit_desc', 'Description');
    const editDueDateLabel =  genLabel('todo_edit_duedate', 'Due Date');
    const editPriorityLabel =  genLabel('todo_edit_priority', 'Priority');
    const editPriority_low_label =  genLabel('todo_edit_title', 'Low');
    const editPriority_med_label=  genLabel('todo_edit_title', 'Medium');
    const editPriority_high_label =  genLabel('todo_edit_title', 'High');

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.id = 'todo_edit_cancel';
    cancelButton.innerText = 'Cancel Edit'

    const saveEditButton = document.createElement('button');
    saveEditButton.type = 'submit';
    saveEditButton.id = 'todo_edit_submit';
    saveEditButton.setAttribute('form', 'edit_form');
    saveEditButton.innerText = 'Save Edit';

    editForm.append(
        editTitleLabel, editTitle,
        genlineBreak(),
        editDescLabel, editDesc,
        genlineBreak(),
        editDueDateLabel, editDate, 
        genlineBreak(),
        editPriorityLabel,
        genlineBreak(),
        editPriority_low_label, editPriority_low,
        genlineBreak(),
        editPriority_med_label, editPriority_med,
        genlineBreak(),
        editPriority_high_label, editPriority_high,
        genlineBreak(),
        cancelButton, saveEditButton
    )
    editFormContainer.appendChild(editForm);

    const displayModal = document.getElementById('display_modal');
    displayModal.appendChild(editFormContainer);
}

export { genTodoItemForm, genFormInput, genLabel, genEditTodoForm, genlineBreak}