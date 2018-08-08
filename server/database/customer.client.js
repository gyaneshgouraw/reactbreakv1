/**
 * 
 */
import { GroupCollection } from '../models/groupCollection'
import { checkLogin } from './customer.controller'
var CustomerCollection = require('../models/customercollection')




/**
 * 
 * @param {*} res 
 */
export function getCustomerCollection(res){
	CustomerCollection.find(function(err, cust) {
			if (err)
				res.send(err);
			res.json(cust); // return all todos in JSON format
		});
};


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export function createCustomerCollection(req,res){
    CustomerCollection.create(req.body, function(err, cust) {
        if (err)
            res.send(err);
        getCustomerCollection(res);
    
 });
}


export function checkUserLogin( req,res){
	  return CustomerCollection.find({ mobile: req.body['mobile']},function (err, docs) {
		checkLogin(res,err,docs)
	  });
}

/**
 * GroupCollection -- post
 * createSchedullerGroup
 * @param {*} req 
 * @param {*} res 
 */
export function createSchedullerGroup(req,res){
    GroupCollection.create(req.body, function(err, cust) {
        if (err)
            res.send(err);
			getSchedullerGroupList(res);
    
 });
} 



/**
 * GroupCollection -- get
 * @param {*} res 
 */
export function getSchedullerGroupList(res){
	GroupCollection.find(function(err, list) {
			if (err)
				res.send(err);
			res.json(list); // return all todos in JSON format
		});
};
//module.exports = router;