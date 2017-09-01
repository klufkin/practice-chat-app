const path = require('path');
const express = require('express'); // import the express module

const app = express(); // create an instance of express
const PUBLIC_PATH = path.join(__dirname, '../public');
const port = process.env.port || 8080; // store the port number we'd like to use

// Need to tell our server where to find our public folder
// set static files (css and image, etc.)
app.use(express.static(PUBLIC_PATH));

// start the server
app.listen(port, function() {
	console.log('app started, listening on port ' + port); // indicate our server is running
}); // ^ code above is not enough to display page, we need to create a path to route to. (created in routes.js)

// // ------------ Router code ------------
// // create router object
// // allows us to use several different routers if needed (more modular/reusable approach)
// const router = express.Router(); // will apply all our routes to router instead of entire router
// // route our router to the '/' root folder (homepage)
// router.get('/', function(request, response) {
// 	response.sendFile(PUBLIC_PATH + '/index.html');
// });
// app.use('/', router); // app.use - is an Express middleware object which has access to all of our requests and responses

