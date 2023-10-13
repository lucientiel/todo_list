const changeBorderColorsByDueDate = (overduedNotice, displayBox) => {
    if (overduedNotice == '*DUE TODAY*') {
        displayBox.style.border = "thick dotted blue"
    } else if (overduedNotice.includes('OVERDUE') == true) {
        displayBox.style.border = "thick dashed red"
    } else {
        displayBox.style.border = ""
    }
}

export {changeBorderColorsByDueDate}