const mongoos = require("mongoose");
require('dotenv').config({path:'../config/.env'})


const connectDB =async ()=>{
    try {
        await  mongoos.connect(process.env.BD_URl)
        console.log("conncted To Mongo DB ^_^")
     
    } catch (error) {
        (error) => console.log("conncetion is failde ", error)
    }
}

module.exports =connectDB ;