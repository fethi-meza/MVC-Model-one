const ErrorModel = require ('../Models/ErrorModel')


module.exports =async(req,res,next)=>{
    try {  
        if(err){
            const {body,params,url , headers} =req
            await ErrorModel ({body,params,url , headers , message:err})
            return res.status(500).json({success :false , message :err})
        }
    } catch (error) {
        res.status(500).json({success :false , message :'somthing wrong in server ' , error})
    }
}