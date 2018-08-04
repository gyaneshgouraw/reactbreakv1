/* Imports */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const compression = require('compression');
const validator = require('express-validator');



const app = express();
// const env = process.env.ENVIRONMENT || 'local';
const config = require('../config/dev/config.json');
const port =  config.port;
const mongoUri = config.mongoUri;


const options = {
    useMongoClient: true,
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};

// Initialise the express components
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(validator());

// Initialise the API routes
app.use('/api', require('./routes/scheduler.routes'));
app.get('/api/ping', (req, res) => res.send('pong'));
// app.use(express.static(__dirname + '/../public'));
app.use((req, res) => res.status(404).json({code: 404, message: 'HTTP 404 Not Found'}));

// Connect to MongoDB
mongoose.connect(mongoUri,options);
let db = mongoose.connection;

db.on('error', () =>{
    console.log('Connection Error');
});
db.once('open', () =>{
  console.log('Connection Successfull!!');
});

mongoose.Promise = global.Promise;

app.listen(port, () => {
    console.log('Server is running on PORT: ' + port);
    console.log('Connecting to Mongo URI: ' + mongoUri.replace(/.*@/, ''));
});

app.close = function(){
    process.exit(0);
};
module.exports = app;
