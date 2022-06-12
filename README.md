# PROBLEM 1

## COPY PROJECT
First copy all files from google drive to your IDE.


## INSTALLATION OF PACKAGES
Then, Type below command in terminal of the project directory.
### `npm install`
This command installs a package, and packages that project depends on.


## RUN THE PROJECT
After above command runs completely then type
### `npm start`
This command runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.


## ABOUT THE PROJECT
The project is build with React.
Main file is Home.js and a component named Grid is import to Home.js
Data(sentences) is stored in form of array. The data is sent from (Home.js to Grid.js)  through props.
Data is shown to user Dynamically.
Functions are created to change styling of the text.
Bootstrap is used to give lit bit of styling.





## STRUCTURE OF THE PROJECT


            App.js    <------     Home.js      <-------    Components(Folder)   <------  Grid(folder)   <--------   Grid.js
                                                                                            ^
                                                                                            |
                                                                                            |
                                                                                            |
                                                                                            |________  Grid.css





## NOTE:
1). In this project i have used a Bootstrap.(It package will get automatically installed when you will type above commmand)
2). If the project doesn't worked on local machine then i have hosted the project on Netlify.
    Hosted link of the project - https://zevi-problem-1.netlify.app/
