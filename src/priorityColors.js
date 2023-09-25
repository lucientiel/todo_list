

const changebgColorByPriority = (todo_item, displayBox) => {
    const itemPriority = todo_item.getPriority();
    if (itemPriority == 'Low') {
        displayBox.style.backgroundColor = 'lightgreen';
    } else if (itemPriority == 'Medium') {
        displayBox.style.backgroundColor = 'yellow';
    } else {
        displayBox.style.backgroundColor = 'orange'
    }
}

export {changebgColorByPriority}