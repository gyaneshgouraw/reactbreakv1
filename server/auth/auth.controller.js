const mongoClient = require('./auth.client');

exports.authenticate = (req, res) => {
    
    mongoClient.authenticate(req, res);

};