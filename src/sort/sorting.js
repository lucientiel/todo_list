const sortingOptions = () => {
    const sortop_container = document.createElement('div');
    sortop_container.id = 'sortop_container';

    const sortOrder = document.createElement('select');
    sortOrder.id = 'sort_order';

    const sortByRecency_oldtonew = document.createElement('option');
    sortByRecency_oldtonew.id = 'sort_by_receny_oldtonew';
    sortByRecency_oldtonew.value = 'recency_otn';
    sortByRecency_oldtonew.innerText = 'Recency (Oldest to Newest)'
    sortByRecency_oldtonew.selected = true;

    const sortByRecency_newtoold = document.createElement('option');
    sortByRecency_newtoold.id = 'sort_by_recency_newtoold';
    sortByRecency_newtoold.value = 'recency_nto';
    sortByRecency_newtoold.innerText = 'Recency (Newest to Oldest)';

    const sortByDueDate_earlytolate = document.createElement('option');
    sortByDueDate_earlytolate.id = 'sort_by_duedate_earlytolate';
    sortByDueDate_earlytolate.value = 'duedate_etl';
    sortByDueDate_earlytolate.innerText = 'Due Date (Earliest to Latest)';
    
    const sortByDueDate_latetoearly = document.createElement('option');
    sortByDueDate_latetoearly.id = 'sort_by_duedate_latetoearly';
    sortByDueDate_latetoearly.value = 'duedate_lte';
    sortByDueDate_latetoearly.innerText = 'Due Date (Latest to Earliest)'

    const sortByPriority_lowtohigh = document.createElement('option');
    sortByPriority_lowtohigh.id = 'sort_by_priorty_lowtohigh';
    sortByPriority_lowtohigh.value = 'priority_lth';
    sortByPriority_lowtohigh.innerText = 'Priority (Low to High)';

    const sortByPriority_hightolow = document.createElement('option');
    sortByPriority_hightolow.id = 'sort_by_priority_hightolow';
    sortByPriority_hightolow.value = 'priority_htl';
    sortByPriority_hightolow.innerText = 'Priority (High to Low)';

    sortOrder.append(
        sortByRecency_oldtonew,
        sortByRecency_newtoold,
        sortByDueDate_earlytolate,
        sortByDueDate_latetoearly,
        sortByPriority_lowtohigh,
        sortByPriority_hightolow,
    )

    sortop_container.appendChild(sortOrder);

    return sortop_container;
}

export {
    sortingOptions
}