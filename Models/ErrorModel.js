const mongoose =require('mongoose')
const {Schema , model} = mongoose

const errorSchema = new Schema({

    url :{
        type : String ,
    },
    body :{
        type : Object ,
    },
    params :{
        type : String ,
    },
    headers :{
        type : Object ,
    },
    message :{
        type : String ,
    }
} , {
    timestamps :true })



    const ErrorModel = model("error",errorSchema)
    module.exports= ErrorModel