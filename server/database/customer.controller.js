



/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const checkLogin=(res,err,docs)=>{
     if (docs){
         const obj = {
             success:true,
             docs
         }
         res.send(obj)
     }
     else{
         res.send(err);
     }        
 }