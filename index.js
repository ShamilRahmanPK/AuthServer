require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./config/connection')

// JWTPASSWORD = shamil123

const authServer = express()

authServer.use(cors())
authServer.use(express.json())
authServer.use(router)

const PORT = 3000

authServer.listen(PORT,()=>{
    console.log(`AuthServer server running at port ${PORT} and wating for client request!!`);
})

authServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>Auth server started and waiting for client request</h1>`)
})

authServer.post('/',(req,res)=>{
    res.status(200).send(`POST REQUEST`)
})
