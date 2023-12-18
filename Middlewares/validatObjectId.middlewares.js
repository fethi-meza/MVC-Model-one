const  mongoose =require('mongoose')
 module.exports.validatObjectId.middlewares =(req,res,next)=>{
    try {
        if(!mongoose.Schema.Types.ObjectId.isValid(req.params.id))
        return res.status(400).json({success :false , message : 'inalid Id'})
    next();
    } catch (error) {
        res.status(500).json({success : false , message : 'somthing wrong'})
    }
 }