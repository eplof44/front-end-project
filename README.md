# Smart Construction Front End Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About
Allows users to create and edit a catalog of materials for a construction project. 

Technology Used:
Front-end: React 
Back-end: json-server
Testing: jest

More details: I made sure to have all basic CRUD features working before moving on to work on styling, testing, adding the color picker. With more time to work on this I would enhance much of the following:
-error handling
-fine tune functionality (headers of table to not load if no materials present)
-validation for inputs (date, price, amount)
-styling for inputs (date, price, amount)
-styling in general (I decided to go forgo much of the styling to focus on functionality)
-more gracefully integrating the color picker
-more unit tests

Outstanding questions - Most of my outstanding questions involve the user experience and how that would change or enhance features. Who the user of this application? Why are they able to change the pricing? Should these prices be fixed or are they just allowed to add by price which would then match an allowed volume?

## Available Scripts

In the project directory, you can run:

### `npm i`
 
Get all necessary packages

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server` 
Launces the server [http://localhost:8000]

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

