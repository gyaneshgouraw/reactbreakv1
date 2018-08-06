const mongoose = require('mongoose');

const config = require('../config/dev/config.json');
const port =  config.port;
const mongoUri = config.mongoUri;

module.exports = function mongoConfig(app) {
   // consol
        // Connect to MongoDB
    mongoose.connect(mongoUri);
    let db = mongoose.connection;

    db.on('error', () =>{
        console.log('Connection Error');
    });
    db.once('open', () =>{
    console.log('Connection Successfull!!');
    });

    mongoose.Promise = global.Promise;
}
