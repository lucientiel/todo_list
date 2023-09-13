let toDoList = []

const todoItem = (title, description, duedate, priority) => {
    let _title = title;
    let _description = description;
    let _dueDate = duedate;
    let _priority = priority;

    const getTitle = () => _title;
    const getDesc = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;

    return { getTitle, getDesc, getDueDate, getPriority}
}

const insertItemToList = (todo_item) => {
    toDoList.push(todo_item);
}


// DOM FUNCTIONS HERE -------------------------------------- //

const formSubmitClick = () => {
    const todoItemForm = document.getElementById('todo_item_form');

    todoItemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formVals = new FormData(todoItemForm);
        console.log(formVals);
        console.log(
            formVals.get('todo_item_title'),
            formVals.get('todo_item_desc'),
            formVals.get('todo_item_duedate'),
            formVals.get('todo_item_priority')
        );
        const newTodoItem = todoItem(
            formVals.get('todo_item_title'),
            formVals.get('todo_item_desc'),
            formVals.get('todo_item_duedate'),
            formVals.get('todo_item_priority')
        );
        toDoList.push(newTodoItem);
        console.log(toDoList);
    })
    
}

const genitemDisplay = (todo_item) => {
    const display = document.createElement('div');
    display.innerHTML = `
    `;
}
const displayitemsInList = () => {
    const contentdiv = getElementById('content');

    for (let i = 0; i < toDoList.length; i++) {
        //do something
    }
}

export {
    formSubmitClick
}