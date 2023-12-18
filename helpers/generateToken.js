const jwt = require('jsonwebtoken') 
require('dotenv').config({path:'../config/.env'})

module.exports.generateToken =(payload)=>{
    return jwt.sign(payload , process.env.JWT_SEKRYT)
}