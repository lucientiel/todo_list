import { displayAllUpcomingTasks } from "./upcomingTasks";

const selectUpcomingDuedTasksDaysOptionClick = () => {
    const upcomingDueDaysDropDown = document.getElementById('dayop_select');
    upcomingDueDaysDropDown.addEventListener('change', (e) => {
        const selectedOption  = e.target.value;
        if (selectedOption == 'upcomingtoday_val') {
            displayAllUpcomingTasks(0);
        }
        else if (selectedOption == 'upcomingoneweek_val') {
            displayAllUpcomingTasks(7);
        }
        else if (selectedOption == 'upcomingtwoweek_val') {
            displayAllUpcomingTasks(14);
        };
    });
}

export {selectUpcomingDuedTasksDaysOptionClick}