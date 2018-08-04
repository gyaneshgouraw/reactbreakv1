const router = require('express').Router();
const authController = require('../auth/auth.controller');

router.get('/auth', (req, res) => {
    return authController.authenticate(req,res);
});


module.exports = router;