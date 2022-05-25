# REACT-MVP
The model-view-presenter pattern is used to ensure separation of the functionalities from the view. In React words, separate the components from the functions.
The tests also help in dictating the separation of concerns. In this project, we do not test the view, we test the presentation logic. Hence, The code should be written in a way that makes the presentation logic easy to test.

The src folder contains the following folders
- contexts
- core
- and features
	-in our case, student.


### Features
Each feature will contain folders for each subfeature:
- In our case, It is
	- Create Student
	- List Student

Each subfeature will contain the following files
	- a view file
	- a presenter file
	- an index file
	- a test folder 
	- and a usecase folder

- The view file houses the component. It's a pure function that either takes in props or uses the presenter hook to get its needed parameters. Within this function. No implementation is done within it.

- The presenter file contains a react hook. The hook exposes functions and data required by the view.

- The test folder contains tests for the presenter. We use @testing-library/react-hooks to test the hook. Also, axios-mock-adapter is used to mock the axios calls.
- The usecase folder handles api calls relative to that particular sub feature. e.g the usecase folder within the list folder will contain api calls or logic that retrieves only list of students.


### Contexts
The contexts are used to manage global data. We use the hook pattern to structure our context for ease.

### Core

This contains logic that are needed to configure our application e.g we have the axios configuration within it.


