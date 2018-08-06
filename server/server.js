/* Imports */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const compression = require('compression');
const validator = require('express-validator');
const path = require('path');
var passport = require('passport'),
GoogleOAuth2Strategy = require('passport-google-auth').Strategy;



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

//configuring path
app.use(express.static(path.join(__dirname, '../build')));


// Initialise the express components
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(validator());

/**
 * Passport auth
 */
let user = {}
passport.use(new GoogleOAuth2Strategy({
    clientId: '651347370973-gjqgapp9jlpgj7eol94gku9rvvdr30p3.apps.googleusercontent.com',
    clientSecret: 'OmsoiNTQcfHHpRxt4XY4-s56',
    callbackURL: 'http://localhost:8080/auth/callback/google'
  },
  function(accessToken, refreshToken, profile, callback) {
    user=profile
    return  callback()
  }
));

// app.get('/loging', passport.authenticate('google'))
app.get('/loging', passport.authenticate('google', { scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read'] 
}));

// app.get('/auth/callback/google', 
//    // passport.authenticate('google', {successRedirect:'/q', failureRedirect: '/hello' ,failureFlash:true}),
//    passport.authenticate('google'), 
//    function(req, res) {
//         // Successful authentication, redirect to your app.
//         console.log(req)
//         res.redirect('/child1');
//     }
// );

app.get('/auth/callback/google',(req, res) => res.redirect('/'))


// Initialise the API routes
app.use('/api', require('./routes/scheduler.routes'));
app.get('/api/ping', (req, res) => res.json({ a: 1 }));



//serving client
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });

//Error page
//app.use((req, res) => res.status(404).json({code: 404, message: 'HTTP 404 Not Found'}));



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
