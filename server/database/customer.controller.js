



/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const checkLogin=(res,err,docs)=>{
    
        docs?res.send(docs):res.send(err);
 }