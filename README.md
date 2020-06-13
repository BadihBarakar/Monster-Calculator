# Monster-Calculator
Monster-Calculator Assessment Test
The application is developped in React.js.

# Installation:
After cloning the repo, change to the cloned repo directory and run: npm install. This will install all dependencies for the application.

# App Specifications:
This calculator is designed and developed based on the PDF file provided for the assessment. 
It contains the basic calculator button layout, which on expanding the screen width, will response by showing the scientific buttons as well. The buttons are all generic created using HTML and CSS.  

The application uses bootstrap for the responsive columns show and hide to show and hide the scientific buttons pad. Rest are all pure css stylings.

For data manipulation within the components, Redux is used to append accessability to the data.

The numbers in the calculator display will change to exponential figure once the number of digits exceeds 7 digits. It will look like 1.00e+8.

Calculations History is accessable by clicking the "History" button which will expand the history display. The history display will show complete oprations. By complete operations I mean operations ended by clicking "=" button.  
