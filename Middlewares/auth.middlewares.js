const jwt = require('jsonwebtoken') 
require('dotenv').config({path:'../config/consfig.env'})


module.exports.auth =async(req,res,next)=>{
    try {
        let token =req.headers['x-auth-token'] ;
        if(!token) return res.status(400).json({success : false, message : "token required "  })
       
        let validate = jwt.verify(token ,process.env.JWT_SEKRYT)
        if(!validate) return res.status(401).json({success : false, message : "invalid Token "  })
       
        let decoded = jwt.decode(token)
        req.prams.user = decoded ?.id;
        next() ;

    } catch (error) {
        res.status(500).json({success : false , message:"somthing wrong in server" ,error})
    }
}