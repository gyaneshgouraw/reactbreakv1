var mongoose = require('mongoose');

export  const GroupCollection = mongoose.model('GroupCollection', {
                    members:{type:Array,default:[]},
                    user: { type: String, default: '' },
                    startdate: { type: String, default: '' },
                    enddate: { type: String, default: '' },
                    address: { type: String, default: '' },
                    mobile: { type: String, default: '' },
                    email: { type: String, default: '' },
            });



