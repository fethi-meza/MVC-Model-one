 const mongoose = require('mongoose')
 const Schema = mongoose.Schema;

 const {generateToken } = require('../helpers/generateToken')


 const UserSchema = new Schema({
    name :{
        type : String ,
        required : true
    } ,
    lastName :{
        type : String ,
        required : true
    } ,
    gander :{
        type : String ,
        enum:["male" ,"femal"]
    } ,
    email :{
        type : String ,
        required : true
    } ,
    password :{
        type : String ,
        required : true
    } ,
    isAdmin :{
        type : Boolean,
       default :false
    } 

 } , {timestamps :true });


 UserSchema.method.generateToken  = function(){
    return generateToken({id :_id,email :this.email ,isAdmin :this.isAdmin})
 }


 const User = mongoose.model('user',UserSchema)
 module.exports = User ;