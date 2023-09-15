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
    const descInput = genFormInput('textarea', '', 'todo_item_desc', 'todo_item_desc');
    const dueDateInput = genFormInput('input', 'date', 'todo_item_duedate', 'todo_item_duedate');
    const priorityInput_low = genFormInput('input', 'radio', 'todo_item_priority', 'todo_item_priority');
    priorityInput_low.setAttribute('value', 'Low');
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

export { genTodoItemForm, genFormInput, genLabel }