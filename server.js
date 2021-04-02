//Importing dependencies

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

//creating a new express application names app
const app = express();

//Set our backend port to be 5000
const port = process.env.PORT || 5000;


//Middleware is a software that lies between the operating system and the application tht we are running.
//includes stuff like web servers and etc.
// cors: An http based mechanism that allows server to indicate any origin, port than its own.
//body-parser: parsin the incoming request bodies in a middleware before you handle it.

//This prints the middleware requests to the server console.
app.use((req,res,next) => {
	console.log(`Request endpoint: ${req.method} and ${req.url}`);
	next();
})

//Configuring the body parser middleware
app.use(bodyParser.json()); //returns middleware that only parses Json
app.use(bodyParser.urlencoded({
    extended: true
})); //middleware for parsing bodies from the URL



//Configure CORs middleware
app.use(cors());

//Require Route
const api = require('./routes/routes');

//congigure app to use that route
app.use('/api/v1/', api);

//This middleware informs our express application to serve our compiled react files

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));
