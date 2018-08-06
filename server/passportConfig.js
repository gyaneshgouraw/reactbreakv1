/**
 * Imports
 */
var passport = require('passport'),
GoogleOAuth2Strategy = require('passport-google-auth').Strategy;



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