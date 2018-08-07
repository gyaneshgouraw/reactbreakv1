import  { router as databaseRoutes }  from '../database/customer.routes'
const router = require('express').Router();
const authController = require('../auth/auth.controller');


router.get('/auth', (req, res) => {
    return authController.authenticate(req,res);
});


/**
 * Nesting routes for database different schemas
 */
router.use('/data', databaseRoutes);



module.exports = router;