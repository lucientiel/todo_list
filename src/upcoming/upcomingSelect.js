const upcomingTaskDayRange = () => {
    const dayop_container = document.createElement('div');
    dayop_container.id = 'dayop_container';

    const dayop_select = document.createElement('select');
    dayop_select.id = 'dayop_select';

    const upcomingToday = document.createElement('option');
    upcomingToday.id = 'upcomingtoday_select'
    upcomingToday.value = 'upcomingtoday_val';
    upcomingToday.innerText = 'Today';
    upcomingToday.selected = true;

    const upcomingOneWeek = document.createElement('option');
    upcomingOneWeek.id = 'upcomingoneweek_select'
    upcomingOneWeek.value = 'upcomingoneweek_val';
    upcomingOneWeek.innerText = '1 Week (7 Days)';

    const upcomingTwoWeeks = document.createElement('option');
    upcomingTwoWeeks.id = 'upcomingtwoweek_select'
    upcomingTwoWeeks.value = 'upcomingtwoweek_val';
    upcomingTwoWeeks.innerText = '2 Weeks (14 Days)';

    dayop_select.append(
        upcomingToday,
        upcomingOneWeek,
        upcomingTwoWeeks
    )
    
    dayop_container.appendChild(dayop_select);
    
    return dayop_container;
}

export { upcomingTaskDayRange }