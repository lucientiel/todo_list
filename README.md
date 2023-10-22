# Project Task Manager Project

## A lightweight Project Task Management Web Application written in Javascript using the webStorage API for data persistence.

## About Project

This project was built and expanded on using <a href="https://www.theodinproject.com/lessons/node-path-javascript-todo-list">The Odin Project's Todo List Project</a> prompt as inspiration. This project's functionalities include the following:

* Creating a Project
* Deleteing a Project
* Creating and editing a Task
* Deleting and completing a Task
* Colorcode Tasks based on their priority and due date details.
* Viewing upcoming and late Tasks and their respective Projects
* Filtering and sorting Tasks by due date, priority, and recency of creation.


The Projects and their respective Tasks are stored locally on the user's browser using the localStorage property of the webStorageAPI. The Projects and their respective Tasks are stored as key-value pairs of a projectName string key and an array of Task objects inside a overall storage Object to allow for a simple and efficient way of accessing the necessary informations required to populate the page based on the user's selections.

To further expand on the point made above: Whenever a project is created, a new key-value pair is created with the project's name as key and a empty array as value. Anytime a task related to a project is created, the task object will be appended to the array. This creates a hierarchy of information similar to a project folder and its items, allowing for a clear and straightfoward way of accessing and managing the stored information.

The task Objects are created and maintained with the following properties:
* title : a string containing the user's inputted task name
* description : a string containing the user's inputted details of the task 
* dueDate: a string containing the user's inputted date
* priority: a string containing the user's assigned priority value for the task
* creationDate: a Date object that is automatically created everytime a task Object is created.
* editedDate: Assigned 'None' by default, but will be assigned a new Date object when the properties of the task Object are manipulated.
* id : a unique integer value that is generated everytime a task Object is created, allowing further ease of access.
* complete: a boolean value that indicates whether the task is complete or incomplete, assigned 'false' by default, but can be changed to 'true' by user input. 
* completedDAte: Assgined 'None' by default, but will be assigned a new Date object when the complete property is assigned a 'true' value. 

## Pre-requisites

What is required to use the application:
* Any browser

## Set-up

The steps required to start up the application:
* Download or pull the project from the github.
* Enter the dist folder in file explorer
* Double-click on the index.html file within the dist folder.
* Viola! The application will start.

## Unit Testing

What to do in order to check that the application is working as intended:
* Check that there is a 'project_1' project in your Project Directory list. There will be one created by default whenever there are no other projects existing on the list.
* Click on the 'project_1' project to check if it allows you to enter the directory of 'project_1'. 
* Upon entering the 'project_1' project directory, visually check to make sure that the task list and complete task list are empty, or if previous tasks persisted unchanged if they were added previously.
* Check that a single task creation form under 'Create a Task' shows up on the sidebar upon entering a project directory by exiting and re-entering the 'project_1' directory. The task creation form will appear when the user enters a project directory and disappear when the user exists the project directory. The form should show input areas for title, due date, description, and select options for priority with options of low, medium, and high.
* Create a task for 'project_1' by filling in the task creation form with the following instructions:
    * Enter some unique name of your preference into the title input.
    * Click on the date input's calender and put in a date set to the current date of usage.
    * Select the low priority option
    * Enter some text of your preference into the notes text area.
Clicking on 'Create Item' should make a new task show up under the task list with a green background with all the same values as the ones that were submitted on the task creation form along with a creation date reflecting the current date. 
* Create another task for 'project_1' by following the same instruction, but select the high priority. Clicking on 'Create item' should make a new task show up under the task list with a red background with all the same vaues as the ones that were submitted on the task creation form a;pmg wtoj a creatopm date reflecting the current date. 
* Exit the project directory to check that the two newly created task also shows up under the upcoming list, then renter the project to check that the tasks persisted in the directory as well.
* Click on 'Edit Task' on the low priority task to check that a edit form shows up in a modal with all of the current task in the input areas. Clicking 'Cancel Edit' should exit the modal without saving any changes.
* Within the edit task form modal, change the title, due date, and description to values of your choice, and set the priority to medium. Clicking 'Save Edit' should exit the modal and update the low priority task to the newly saved values and change its background color to orange. 
* Exit and re-enter the 'project_1' directory to check that the change is persistent for the originally-low-priority task in the upcoming list and within the directory. 
* Click on 'Complete Task' for the high priority task and check that it disppears from the Tasks list and reappears under the Completed Tasks list. Then exit the project and re-enter the project to check that the high priority task no longer shows up on the Upcoming Tasks list and persist to show up in the Completed Tasks list within the 'project_1' directory.
* Click on 'Delete Task' for both tasks and check that they disappear under their respective lists. Then exist and re-enter the 'project_1' directory to check that they no longer show up in either show up in the Upcoming Tasks list and the deletion persists within the directory.
* Enter a new project name under 'Create a Project', and click submit. Then check if the project name shows up under the Project Directory list.
* Click on the newly created project within the Project Directory list to enter its directory. 
* Redo the same unit tests until this point for the new project directory to check if it functions properly.
* Create two more new tasks for a project directory of your choice, and then click on the 'Delete Project' button next to the project's name on the Project Directory list. Check that you are redirected to the Upcoming Tasks page and that deleted project's name no longer shows up under the Project Directory list and its tasks no longer shows up in the upcoming tasks either. 

Further unit tests will be added when new features are implemented. 

## Potential future features

Potential future features to implement include:
* Responsivie interface design for mobile and different browser sizes
* Deploy to GitPages
* Edit Project names


## Other resources
Background iamge is created by <a href="https://unsplash.com/@giamboscaro">Giammarco Boscaro</a> on <a href="https://unsplash.com/">Unsplash</a>