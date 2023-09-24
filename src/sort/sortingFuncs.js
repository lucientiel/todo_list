import { recencySortDisplay_otn, 
    recencySortDispay_nto, 
    duedateSortDisplay_etl, 
    duedateSortDisplay_lte, 
    prioritySortDisplay_lth, 
    prioritySortDisplay_htl  } from "./sortEvents";

const savedSortDisplayItemsInList = () => {
    const currSelectedValue = checkCurrSort();

    if (currSelectedValue == 'recency_otn') {
        recencySortDisplay_otn();
    } else if (currSelectedValue == 'recency_nto' ) {
        recencySortDispay_nto();
    } else if (currSelectedValue == 'duedate_etl') {
        duedateSortDisplay_etl();
    } else if (currSelectedValue == 'duedate_lte') {
        duedateSortDisplay_lte();
    } else if (currSelectedValue == 'priority_lth') {
        prioritySortDisplay_lth();
    } else if (currSelectedValue == 'priority_htl') {
        prioritySortDisplay_htl();
    }
}

const checkCurrSort = () => {
    const sortDropDown = document.getElementById('sort_order');
    return sortDropDown.selectedOptions[0].value;
}

export { savedSortDisplayItemsInList }