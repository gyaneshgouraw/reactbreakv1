

var CustomerCollection = require('../models/customercollection');


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




//module.exports = router;