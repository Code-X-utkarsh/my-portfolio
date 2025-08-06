// server.js
// This file sets up a simple Node.js server using Express to serve your static portfolio files.

// Import the Express.js library.
const express = require('express');
// Create an instance of the Express application.
const app = express();
// Define the port on which the server will listen.
// It will use the environment variable PORT if available (common in hosting environments), otherwise default to 3000.
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory.
// When a request comes in, Express will look for the requested file (e.g., index.html, style.css)
// within the 'public' directory.
app.use(express.static('public'));

// Define a route for the root URL '/'.
// When a user accesses the base URL of your application, this function will be executed.
app.get('/', (req, res) => {
    // Send the 'index.html' file located in the 'public' directory.
    // The 'path' module is used here to ensure the correct file path regardless of the operating system.
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server and listen for incoming requests on the specified port.
app.listen(port, () => {
    // Log a message to the console indicating that the server is running and on which port.
    console.log(`Server running at http://localhost:${port}`);
    console.log('Open your browser and navigate to this address to view your portfolio.');
});