/**
 * Module imports
 */
import {getCustomerCollection,createCustomerCollection} from './customer.client'



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



