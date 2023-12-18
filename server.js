const express = require('express')
const cors =require('cors')

const  UserRout =require('./Routers/user_Route')
const connectDB = require('./Services/connectDB')
const{ROUTES} = require('./Constants/constants')


//config env
require('dotenv').config({path:'../config/.env'})
 
const port = 3001|| process.env.PORT

//connection Db
connectDB();
// Init App
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(ROUTES, UserRout)







app.listen(port, () => console.log(`Example app listening on port ${port}!`))