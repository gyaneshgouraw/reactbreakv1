const router = require('express').Router();
const authController = require('../auth/auth.controller');
import  { router as custClient }  from '../database/customer.controller'

router.get('/auth', (req, res) => {
    return authController.authenticate(req,res);
});


/**
 * Nesting routes for database different schemas
 */
router.use('/data', custClient);



module.exports = router;