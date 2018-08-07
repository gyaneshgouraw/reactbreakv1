/**
 * Module imports
 */
import {getCustomerCollection,createCustomerCollection, checkUserLogin} from './customer.client'



export const router = require('express').Router();



/**
 * 
 */
router.get('/customercollection', function (req, res) {
    getCustomerCollection(res);
});
/**
 * 
 */
router.post('/customercollection', function (req, res) {
    createCustomerCollection(req,res)
});

/**
 * 
 */
router.post('/checkuserlogin', function (req, res) {
    checkUserLogin(req,res)
});





