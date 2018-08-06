/**
 * Module impoprts
 */
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const validator = require('express-validator');
const path = require('path');

/**
 * Custom imports
 */
var mongoConfig = require('./mongoConfig')



/**
 * Initialization
 */
const app = express();
    mongoConfig()
// const env = process.env.ENVIRONMENT || 'local';



/**
 * Different path configs
 */
app.use(express.static(path.join(__dirname, '../build')));
const config = require('../config/dev/config.json');
const port =  config.port;



/**
 * Relevant initializations for request
 */
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(validator());


/** 
 * API router configuration
 */
app.use('/api', require('./routes/scheduler.routes'));
app.get('/api/ping', (req, res) => res.json({ a: 1 }));


/**
 * Servicing client side routes
 */
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });

//Error page
//app.use((req, res) => res.status(404).json({code: 404, message: 'HTTP 404 Not Found'}));





app.listen(port, () => {
    console.log('Server is running on PORT: ' + port);
   // console.log('Connecting to Mongo URI: ' + mongoUri.replace(/.*@/, ''));
});

// app.close = function(){
//     process.exit(0);
// };
module.exports = app;
